import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JumuahTimesPage } from './jumuah-times.page';

describe('JumuahTimesPage', () => {
  let component: JumuahTimesPage;
  let fixture: ComponentFixture<JumuahTimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumuahTimesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JumuahTimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
