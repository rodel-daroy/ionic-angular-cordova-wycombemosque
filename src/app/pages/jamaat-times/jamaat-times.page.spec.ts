import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JamaatTimesPage } from './jamaat-times.page';

describe('JamaatTimesPage', () => {
  let component: JamaatTimesPage;
  let fixture: ComponentFixture<JamaatTimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamaatTimesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JamaatTimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
