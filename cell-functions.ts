class CellJsUtils {
  newComponent(type: string, classes?: string): Object {
    return {
      $type: type,
      class: classes
    };
  }

  appendComponent(componentParent: any, componentChild: Object): Object {
    if (componentParent && componentChild) {
      return componentParent.$components.push(componentChild);
    }
  }

  applyClass(components: Array<any>, classes: string): boolean {
    if (components && components.length > 0) {
      components.forEach((val: any, index: number, arr: Array<any>): void => {
        if (val.class) {
          val.class = (<string>val.class).concat(' ' + classes);
        } else {
          val.class = this;
        }
      }, classes);
      return true;
    }
    return false;
  }
}
