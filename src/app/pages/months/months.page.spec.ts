import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonthsPage } from './months.page';

describe('MonthsPage', () => {
  let component: MonthsPage;
  let fixture: ComponentFixture<MonthsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonthsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
