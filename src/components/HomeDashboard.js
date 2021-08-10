import React from 'react';
import { Media, Table, Button } from 'reactstrap';

const HomeDashboard = (props) => {
    return (
        <div id = "container" className="m-5">
            <Media>
                <Media left href="#">
                    <Media object data-src="holder.js/64x64"
                    alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                    Welcome Pomodoro!
                    </Media>
                    <div id = "trade-stats">
                        <ul>
                            <li>Number of trades:</li>
                            <li>Wins:</li>
                            <li>Losses:</li>
                            <li>Average Gain:</li>
                            <li>Average Loss</li>
                        </ul>
                    </div>
                </Media>
            </Media>
        
            <div id = "win-rate">
                Win Rate container
            </div>

            <div id = "todays-profit">
                Today's Profit
            </div>
            
            <div id = "trade-journal">
                <Table>
                    <thead>
                        <tr>
                        <th>Trade #</th>
                        <th>Date</th>
                        <th>Ticker</th>
                        <th>Long/Short</th>
                        <th>Gain/Loss</th>
                        <th>Trade Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">5</th>
                            <td>Aug 10, 2021</td>
                            <td>DOGE</td>
                            <td>Long</td>
                            <td>+$23.20</td>
                            <td><Button>View</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Aug 10, 2021</td>
                            <td>DOGE</td>
                            <td>Short</td>
                            <td>-$69.20</td>
                            <td><Button>View</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Aug 10, 2021</td>
                            <td>ETH</td>
                            <td>Short</td>
                            <td>+$420.69</td>
                            <td><Button>View</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Aug 10, 2021</td>
                            <td>MATIC</td>
                            <td>Long</td>
                            <td>-$17.69</td>
                            <td><Button>View</Button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Aug 10, 2021</td>
                            <td>AXS</td>
                            <td>Short</td>
                            <td>-$20.21</td>
                            <td><Button>View</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};



export default HomeDashboard;