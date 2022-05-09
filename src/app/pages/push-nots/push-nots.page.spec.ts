import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PushNotsPage } from './push-nots.page';

describe('PushNotsPage', () => {
  let component: PushNotsPage;
  let fixture: ComponentFixture<PushNotsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNotsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PushNotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
