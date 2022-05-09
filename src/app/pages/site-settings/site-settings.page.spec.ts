import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiteSettingsPage } from './site-settings.page';

describe('SiteSettingsPage', () => {
  let component: SiteSettingsPage;
  let fixture: ComponentFixture<SiteSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiteSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
