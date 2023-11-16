import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookModificationComponent } from './notebook-modification.component';

describe('NotebookModificationComponent', () => {
  let component: NotebookModificationComponent;
  let fixture: ComponentFixture<NotebookModificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotebookModificationComponent]
    });
    fixture = TestBed.createComponent(NotebookModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
