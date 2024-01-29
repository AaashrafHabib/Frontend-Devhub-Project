import { consultant } from './consultant';
import {project} from "./project";

export class projectall {
    project: project ;
    consultant: consultant;

    constructor(
        project: project ,
        user: consultant

    ) {
        this.project = project;
        this.consultant = user ;
    }
}
