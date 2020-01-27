import React from "react";
import {Button, Card, CardBody, CardDeck, CardFooter, CardHeader, CardText, Col} from "reactstrap";
import {db} from "../services/firebase";


class Data extends React.Component {
    state = {
        listName: '',
        newKey: '',
        datalist: [],
        dataCards: []
    };

    async componentDidMount(){
        const listRef = db.collection('lists');
        let lists = listRef.get().then(
            snapshot => {
                // snapshot.forEach(doc =>{
                //
                // })
                this.setState({
                    datalist: snapshot
                })
            }
        ).catch(err =>{
            console.log('Error getting documents', err);
        });

        // Get data cards
        const cardsRef = db.collection('datacards');
        let cards = cardsRef.get().then(
            snapshot => {
                this.setState({
                    dataCards: snapshot
                    })
            }
        ).catch(err => {
            console.log('Error getting cards', err);
        })
    }
    saveList(){
         if (this.state.listName == ''){
             alert('List cannot be empty')
         }else{
             let entry = {
                  key: this.state.newKey,
                  listName: this.state.listName
             }
             const newListKey = db.collection('lists').add(entry)
                 .then(ref =>{
                     //successful add
                     console.log('Added document with Id:', ref.id);
                 })
         }
    }

    deleteList(key: any){
        db.collection('')
    }
    _handleChange(e:any) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    renderCards(){
    }
    render(){
        return (
            <div>
                <CardDeck>
                    {
                        this.state.datalist.map((list, index) => {
                            // @ts-ignore
                            const cards = this.state.dataCards.filter(card => card.listKey === list.key);
                            return (
                                <div key={index}>
                                    <Col sm="2.5">
                                        <Card>
                                            <CardHeader>
                                                // @ts-ignore
                                                {list.listName}
                                                <Button close/>
                                            </CardHeader>
                                            {
                                                cards.map((card, index) => {
                                                    return (
                                                        <CardBody key={index}>
                                                            <div>
                                                                <CardText>
                                                                    // @ts-ignore
                                                                    {card.cardName}
                                                                    <Button close/>
                                                                </CardText>
                                                            </div>
                                                        </CardBody>
                                                    )
                                                })
                                            }
                                            <CardFooter>
                                                <div className="row">
                                                    <input placeholder='Add a List'
                                                           type='text'
                                                           name='listName'
                                                           value={this.state.listName}/>
                                                    <Button onClick={()=> this.saveList()}>Save</Button>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </div>
                            )
                        })
                    }
                    <Col sm="2.5">
                        <Card>
                            <CardHeader>
                                <div className="row">
                                    <input placeholder='Add a Task'/>
                                    <Button>Save</Button>
                                </div>
                            </CardHeader>
                        </Card>
                    </Col>
                </CardDeck>
            </div>
        );
    }

}
export default Data;

// {
//     key: 1,
//         listName: 'to do'
// },
// {
//     key: 2,
//         listName: 'Doing'
// },
// {
//     key: 3,
//         listName: 'Done'
// }

// {
//     key: 1,
//         cardName: 'Final Project',
//     listKey: 1
// },
// {
//     key: 2,
//         cardName: 'Trello',
//     listKey: 2
// },
// {
//     key: 3,
//         cardName: 'Webpack Intro',
//     listKey: 2
// },
// {
//     key: 4,
//         cardName: 'Message App',
//     listKey: 3
// }
