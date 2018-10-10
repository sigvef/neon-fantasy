(function(global) {
  const F = (frame, from, delta) => (
    frame - FRAME_FOR_BEAN(from)) / (FRAME_FOR_BEAN(from + delta) - FRAME_FOR_BEAN(from)
  );

  class neonCityNode extends NIN.THREENode {
    constructor(id, options) {
      super(id, {
        camera: options.camera,
        outputs: {
          render: new NIN.TextureOutput()
        }
      });

      // this.bigSphereTexture = Loader.loadTexture('res/ivertex2.png');
      // this.bigSphereTexture.minFilter = THREE.LinearFilter;
      // this.bigSphereTexture.magFilter = THREE.LinearFilter;
      // this.bigSphereMaterial = new THREE.MeshStandardMaterial({
      //   shading: THREE.FlatShading,
      //   metalness: 1,
      //   roughness: 0.5,
      //   map: this.bigSphereTexture,
      //   emissive: 0x111111,
      //   emissiveMap: this.bigSphereTexture,
      //   emissiveIntensity:1,
      //   side: THREE.DoubleSide,
      //   side: THREE.FrontSide
      // });

      // // Giant sphere
      // this.bigSphereGeometry = new THREE.SphereGeometry(4000,1000,1000);
      // this.bigSphere = new THREE.Mesh(this.bigSphereGeometry, this.bigSphereMaterial)
      // this.bigSphere.scale.x = -1;
      // this.bigSphere.scale.y = -1;
      // this.bigSphere.scale.z = -1;
      // this.bigSphere.rotation.z = -Math.PI /2;
      // this.bigSphere.position.y = 3000;
      // this.bigSphere.position.z = -1500;
      // this.scene.add(this.bigSphere);


	//bigass cylinder
	var geometryCylinder = new THREE.CylinderGeometry(3000,3000,6000,64,12, true);
	var materialCylinder = new THREE.MeshBasicMaterial({
		wireframe: true,
		color: 0xffffff,
		side: THREE.DoubleSide,
		side: THREE.FrontSide
		
	});
	
  this.cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
  
  this.cylinder.rotation.z = 1.57;
  this.cylinder.position.y = 2800;
  this.cylinder.position.z = 1000;
  this.scene.add(this.cylinder);
  
  this.castleTexture = Loader.loadTexture('res/test.png');
  this.castleTexture.minFilter = THREE.LinearFilter;
  this.castleTexture.magFilter = THREE.LinearFilter;
  this.castleMaterial = new THREE.MeshStandardMaterial({
    metalness: 1,
    roughness: 0.5,
    map: this.castleTexture,
    emissive: 0x00ffff,
    emissiveMap: this.castleTexture,
    emissiveIntensity:1,
  });
      
      this.castles = [];

      for(let i = 0; i < 1; i++)
      {
        var turretGeometry = new THREE.BoxGeometry(100, 300, 100);
        var wallGeometry = new THREE.BoxGeometry(200, 100, 50);

        var castle = new THREE.Group();
        
        let turretOffset = 150;
        let turretHeightFromGround = 100;

        var turret1 = new THREE.Mesh(turretGeometry, this.castleMaterial);
        turret1.position.x = turretOffset;
        turret1.position.z = turretOffset;
        turret1.position.y = turretHeightFromGround;
        castle.add(turret1);

        var turret2 = new THREE.Mesh(turretGeometry, this.castleMaterial);
        turret2.position.x = -turretOffset;
        turret2.position.z = -turretOffset;
        turret2.position.y = turretHeightFromGround;
        castle.add(turret2);

        var turret3 = new THREE.Mesh(turretGeometry, this.castleMaterial);
        turret3.position.x = -turretOffset;
        turret3.position.z = turretOffset;
        turret3.position.y = turretHeightFromGround;
        castle.add(turret3);

        var turret4 = new THREE.Mesh(turretGeometry, this.castleMaterial);
        turret4.position.x = turretOffset;
        turret4.position.z = -turretOffset;
        turret4.position.y = turretHeightFromGround;
        castle.add(turret4);

        var wall1 = new THREE.Mesh(wallGeometry,this.castleMaterial);
        wall1.position.z = turretOffset;
        castle.add(wall1);

        var wall2 = new THREE.Mesh(wallGeometry,this.castleMaterial);
        wall2.position.z = -turretOffset;
        castle.add(wall2);

        var wall3 = new THREE.Mesh(wallGeometry,this.castleMaterial);
        wall3.position.x = turretOffset;
        wall3.rotation.y = Math.PI/2;
        castle.add(wall3);

        var wall4 = new THREE.Mesh(wallGeometry,this.castleMaterial);
        wall4.position.x = -turretOffset;
        wall4.rotation.y = Math.PI/2;
        castle.add(wall4);

        this.castles.push(castle);
        this.cylinder.add(castle);
        castle.position.y = -2900;
        // this.castle.position.
        this.scene.add(castle);


      }

      this.camera.far = 10000;
      this.camera.position.z = 1000;
      
      // let light = new THREE.PointLight(0xffffff, 1, 10000);
      // light.position.set(50, 50, 50);
      // this.scene.add(light);
    }

    update(frame) {
      super.update(frame);

      // this.castles.forEach(castle => {
      //   castle.rotation.x += 0.01;
      //   castle.rotation.y += 0.01;

      // });

      // this.cylinder.rotation.x -= 1 ;
    }
  }

  global.neonCityNode = neonCityNode;
})(this);
