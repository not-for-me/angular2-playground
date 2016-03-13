/**
 * Created by woojin on 2016. 3. 13.
 */
// angular2는 모듈 기반으로 필요한 모듈을 import해서 사용
import {Component} from 'angular2/core';

// 컴포넌트는 Angular2의 모듈의 속성정보를 담고 있는 decorator
@Component({
    selector: 'rcp-logger-main',
    template: '<h1>Rock Scissors Paper Logger</h1>'
})
// export가 붙어 있어서 다른 파일에서 RCPApp 컴포넌트 모듈을 import할 수 있음
export class RCPAppCmp {
}