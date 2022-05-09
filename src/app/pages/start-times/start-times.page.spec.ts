import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartTimesPage } from './start-times.page';

describe('StartTimesPage', () => {
  let component: StartTimesPage;
  let fixture: ComponentFixture<StartTimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTimesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartTimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
