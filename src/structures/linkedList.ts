class linkedList <T> implements IlinkedList <T>{
  constructor(oldNode: IllNode <T>) {
    this.previousNode = oldNode;
  }
  private previousNode: IllNode <T>;

  public addNode(inputNode: IllNode <T>): void {

  }

  public removeNode(inputNode: IllNode <T>): void {

  }
}

interface IllNode <T> {

}

interface IlinkedList <T> {
  addNode(inputNode: IllNode <T>): void;
  removeNode(inputNode: IllNode <T>): void;

}
