import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

class Producto extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Producto;