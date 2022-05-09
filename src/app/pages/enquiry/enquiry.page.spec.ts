import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnquiryPage } from './enquiry.page';

describe('EnquiryPage', () => {
  let component: EnquiryPage;
  let fixture: ComponentFixture<EnquiryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnquiryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
