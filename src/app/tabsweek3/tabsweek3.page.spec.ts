import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tabsweek3Page } from './tabsweek3.page';

describe('Tabsweek3Page', () => {
  let component: Tabsweek3Page;
  let fixture: ComponentFixture<Tabsweek3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabsweek3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabsweek3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
