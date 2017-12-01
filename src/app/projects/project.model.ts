export class Project {
  public id: number;
  public name: string;
  public image: string;
  public scenario: Object;

  constructor(id: number, name: string, image: string, scenario: Object) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.scenario = scenario;
  }
}
