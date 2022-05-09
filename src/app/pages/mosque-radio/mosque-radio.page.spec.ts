import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MosqueRadioPage } from './mosque-radio.page';

describe('MosqueRadioPage', () => {
  let component: MosqueRadioPage;
  let fixture: ComponentFixture<MosqueRadioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosqueRadioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MosqueRadioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
