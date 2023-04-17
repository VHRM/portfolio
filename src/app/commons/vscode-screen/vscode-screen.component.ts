import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vscode-screen',
  templateUrl: './vscode-screen.component.html',
  styleUrls: ['./vscode-screen.component.scss']
})
export class VscodeScreenComponent {
  @Input() name: string | undefined;
  @Input() list: string[] | undefined;
}
