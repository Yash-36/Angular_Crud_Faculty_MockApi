import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditfacultyComponent } from './addeditfaculty.component';

describe('AddeditfacultyComponent', () => {
  let component: AddeditfacultyComponent;
  let fixture: ComponentFixture<AddeditfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddeditfacultyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddeditfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
