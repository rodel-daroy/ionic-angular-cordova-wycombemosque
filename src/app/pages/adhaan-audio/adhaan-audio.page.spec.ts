import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdhaanAudioPage } from './adhaan-audio.page';

describe('AdhaanAudioPage', () => {
  let component: AdhaanAudioPage;
  let fixture: ComponentFixture<AdhaanAudioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhaanAudioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdhaanAudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
