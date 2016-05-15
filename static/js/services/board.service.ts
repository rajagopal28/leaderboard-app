import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map'
import {AppConfig} from '../config/config.ts';

@Injectable()
export class BoardService {

    constructor(private http:Http) {
    }

    fetchBySegment(segmentType, segmentValue) {
        let params:URLSearchParams = new URLSearchParams();
        params.set('boardSegmentType', segmentType);
        params.set('boardSegmentValue', segmentValue);
        return this.http.get(AppConfig.API_ENDPOINT + 'board/all', {
            search: params
        }).map(response => response.json());
    }
    fetchAggregatedLegendBySegment(segmentType, segmentValue) {
        let params:URLSearchParams = new URLSearchParams();
        params.set('boardSegmentType', segmentType);
        params.set('boardSegmentValue', segmentValue);
        return this.http.get(AppConfig.API_ENDPOINT + 'board/count', {
            search: params
        }).map(response => response.json());
    }
}
