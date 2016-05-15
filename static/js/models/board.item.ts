import {User} from './user';

export interface BoardItem {
    user: User,
    levelName: string,
    boardSegmentType: string,
    boardSegmentValue: string,
    levelValue: string
}
