import { ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    component.items = [{} as any, {} as any, {} as any];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stop advancing the slide once the component is destroyed', fakeAsync(() => {
    tick(5000);
    expect(component.setSlide).toBe(1);

    fixture.destroy();
    tick(5000);

    // regression test: the auto-rotate interval must be cleared on destroy,
    // otherwise it keeps firing (and mutating a detached component) forever
    expect(component.setSlide).toBe(1);

    discardPeriodicTasks();
  }));
});
