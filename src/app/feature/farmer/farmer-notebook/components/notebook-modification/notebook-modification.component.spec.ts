import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotebookModificationComponent } from './notebook-modification.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';



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

@Component({
  selector: 'notebook-modification.component',
  styleUrls: ['notebook-modification.component.css'],
  templateUrl: 'notebook-modification.component.html',
  standalone: true,
  imports: [MatIconModule,MatDividerModule,MatExpansionModule,NgFor],
})
