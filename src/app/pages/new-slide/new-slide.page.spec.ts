import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewSlidePage } from './new-slide.page';

describe('NewSlidePage', () => {
  let component: NewSlidePage;
  let fixture: ComponentFixture<NewSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
