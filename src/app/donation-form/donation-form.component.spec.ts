import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DonationFormComponent } from './donation-form.component';
import { By } from '@angular/platform-browser';

describe('DonationFormComponent', () => {
  let component: DonationFormComponent;
  let fixture: ComponentFixture<DonationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ DonationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should chk button', () => {
    fixture = TestBed.createComponent(DonationFormComponent);
    component = fixture.componentInstance;
    const element = fixture.debugElement.query(By.css("label[for=firstname]"));    
    expect(element).toBe('First Name');

  }); 


});
