class Polyline {
    constructor() {
        this.polyline = document.getElementById('polyline');
        this.circle = document.getElementById('circle');
    }

    parsePoints = () => {
        return this.polyline.getAttribute('points').split(/[ ,]+/);;
    }

    getCoordinates = () => {
        let coordinates = {
            'X': [],
            'Y': []
        };

        let points = this.parsePoints();

        for (let i = 0; i < points.length; i += 2) {
            coordinates['X'].push(points[i]);
        }

        for (let j = 1; j < points.length; j += 2) {
            coordinates['Y'].push(points[j]);
        }

        return coordinates;
    }

    animate = () => {
        let coordinates = this.getCoordinates();

        this.circle.style.left = coordinates['X'][0] + 'px';
        this.circle.style.top = coordinates['Y'][0] + 'px';

        let pos = 1;

        const frame = () => {
            this.circle.style.left = coordinates['X'][pos] + 'px';
            this.circle.style.top = coordinates['Y'][pos] + 'px';
            pos++;
        }

        setInterval(frame, 30);
    }
}