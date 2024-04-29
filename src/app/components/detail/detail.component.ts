import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit, OnDestroy {
  paramValue: string | null | undefined;
  private paramMapSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramMapSubscription = this.route.paramMap.subscribe(params => {
      this.paramValue = params.get('param');
    });
  }

  ngOnDestroy() {
    if (this.paramMapSubscription) {
      this.paramMapSubscription.unsubscribe();
    }
  }
}
