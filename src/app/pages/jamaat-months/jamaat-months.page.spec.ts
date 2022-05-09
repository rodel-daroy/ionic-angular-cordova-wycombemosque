import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JamaatMonthsPage } from './jamaat-months.page';

describe('JamaatMonthsPage', () => {
  let component: JamaatMonthsPage;
  let fixture: ComponentFixture<JamaatMonthsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamaatMonthsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JamaatMonthsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
