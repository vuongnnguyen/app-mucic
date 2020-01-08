import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeltailsPage } from './deltails.page';

describe('DeltailsPage', () => {
  let component: DeltailsPage;
  let fixture: ComponentFixture<DeltailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeltailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
