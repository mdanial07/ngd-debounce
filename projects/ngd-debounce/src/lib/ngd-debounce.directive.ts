import { Directive, EventEmitter, ElementRef, Output, Input, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgModel } from '@angular/forms';

@Directive({ selector: '[debounce]', providers: [NgModel] })
export class DebounceDirective implements OnInit {
    modelChanged: Subject<string> = new Subject<string>();

    @Input() time: number = 0;
    @Output() debounce = new EventEmitter<any>();

    constructor(
        private elementRef: ElementRef
    ) { }

    ngOnInit() {
        fromEvent(this.elementRef.nativeElement, 'keyup').pipe(debounceTime(this.time)).subscribe((input: any) => {
            this.debounce.emit(input.target.value)
        })
    }
}