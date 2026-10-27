import { TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Contact } from './contact';

describe('Contact delivery', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [Contact, FormsModule] }));
  function setup() {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const resetForm = jasmine.createSpy('resetForm');
    return {
      fixture,
      component: fixture.componentInstance,
      form: { resetForm } as unknown as NgForm,
      resetForm,
    };
  }
  it('rejects whitespace and invalid email without sending', async () => {
    const send = spyOn(emailjs, 'send');
    const { component, form } = setup();
    component.formData = { name: '  ', email: 'not-an-email', message: '   ' };
    await component.onSubmit(form);
    expect(send).not.toHaveBeenCalled();
    expect(component.showError('name')).toBeTrue();
  });
  it('preserves the message after a delivery failure', async () => {
    spyOn(emailjs, 'send').and.rejectWith(new Error('Network unavailable'));
    const { component, form, resetForm } = setup();
    const message = {
      name: 'A visitor',
      email: 'visitor@example.com',
      message: 'A project discussion for next month.',
    };
    component.formData = { ...message };
    await component.onSubmit(form);
    expect(component.status).toBe('error');
    expect(component.formData).toEqual(message);
    expect(resetForm).not.toHaveBeenCalled();
  });
  it('blocks a second submission while delivery is pending', async () => {
    let finish!: (value: { status: number; text: string }) => void;
    const send = spyOn(emailjs, 'send').and.returnValue(
      new Promise((resolve) => (finish = resolve)),
    );
    const { component, form } = setup();
    component.formData = {
      name: 'A visitor',
      email: 'visitor@example.com',
      message: 'A project discussion for next month.',
    };
    const first = component.onSubmit(form);
    await component.onSubmit(form);
    expect(send).toHaveBeenCalledTimes(1);
    finish({ status: 200, text: 'OK' });
    await first;
    expect(component.status).toBe('success');
    expect(component.formData.message).toBe('');
  });
});
