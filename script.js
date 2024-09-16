/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

AFRAME.registerComponent('cloak', {
    init: function () {
        var geometry = new THREE.BoxGeometry(1.1, 0.2, 1.1);
        var material = new THREE.MeshBasicMaterial({ colorWrite: false });
        var cube = new THREE.Mesh(geometry, material);
        this.el.object3D.add(cube);
    }
});

