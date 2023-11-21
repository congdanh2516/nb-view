import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookWriteComponent } from './notebook-write.component';

describe('NotebookWriteComponent', () => {
  let component: NotebookWriteComponent;
  let fixture: ComponentFixture<NotebookWriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotebookWriteComponent]
    });
    fixture = TestBed.createComponent(NotebookWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
