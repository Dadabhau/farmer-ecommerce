import {
  Component,
  Input,
  ContentChild,
  ElementRef,
  AfterContentInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass, NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  // Inputs (API)
  @Input() variant: 'primary' | 'success' | 'danger' | 'dark' | '' = '';
  @Input() elevation: 'sm' | 'md' | 'lg' | '' = '';
  @Input() loading: boolean = false;
  @Input() clickable: boolean = false;
  @Input() cardClass: string = '';
  @Input() cardStyle: { [key: string]: any } = {};

  // Output (for clickable cards)
  @Output() cardClick = new EventEmitter<void>();

  // Content detection
  @ContentChild('[card-header]') header!: ElementRef;
  @ContentChild('[card-footer]') footer!: ElementRef;

  hasHeader = false;
  hasFooter = false;

  // Dynamic Classes
  get variantClass(): string {
    return this.variant ? `border-${this.variant}` : '';
  }

  get elevationClass(): string {
    const map: any = {
      sm: 'shadow-sm',
      md: 'shadow',
      lg: 'shadow-lg',
    };
    return map[this.elevation] || '';
  }

  ngAfterContentInit(): void {
    this.hasHeader = !!this.header;
    this.hasFooter = !!this.footer;
  }

  handleClick() {
    if (this.clickable && !this.loading) {
      this.cardClick.emit();
    }
  }
}
