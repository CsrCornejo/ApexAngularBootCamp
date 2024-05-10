import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatChipsModule, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.sass',
})
export class PaginationComponent {
  @Input()
  itemsLength: number = 20;
  @Input()
  currentPage: number = 1;
  @Output()
  currentPageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.itemsLength / 5);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  selectPage(page: number): void {
    this.currentPageChange.emit(page); // Emit the updated page to the parent
  }
}
