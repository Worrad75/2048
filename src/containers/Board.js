import React from "react";
import Tile from "../components/Tile"

export default class Board extends React.Component {

    state = {
        tiles: [
            // [0,1,2,3],
            // [4,5,6,7],
            // [8,9,10,11],
            // [12,13,14,15]
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    }

    // when we make a new board, create 2 tiles
    componentDidMount() {
        this.generateStartingTiles()
    }

    // general purpose method for retrieving the tile at given coordinates
    getTileAt(y, x) {
        return this.state.tiles[y][x]
    }

    generateStartingTiles = () => {
        this.getRandomTile()
    }

    getRandomTile() {
        console.log("finding new tile...")

        let x = Math.floor((Math.random() * 3) + 0);
        let y = Math.floor((Math.random() * 3) + 0);
        console.log("random x = ", x)
        console.log("random y = ", y)
        console.log("value of random tile:", this.getTileAt(y, x))

        if (this.getTileAt(y, x) === 0) {
            this.makeNewTileAt(y, x)
        } else {
            this.getRandomTile()
        }
    }

    makeNewTileAt(y, x) {
        let freshTiles = [...this.state.tiles]
        freshTiles[y][x] = <Tile x={x} y={y} key={""} />
        // console.log(this.state.tiles)
        this.setState({
            tiles: freshTiles
        })
        // }, console.log(this.state.tiles))
    }

    render() {
        return (
            <div>
                here's what my board looks like: <br/>
                {/* given the y axis */}
                {this.state.tiles[0]}<br />
                {this.state.tiles[1]}<br />
                {this.state.tiles[2]}<br />
                {this.state.tiles[3]}<br />
            </div>
        )
    }
}