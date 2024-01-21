import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";

type IMaterials = {
  Fortress: MeshStandardMaterial;
  Environment: MeshStandardMaterial;
  Sand: MeshStandardMaterial;
  material: MeshStandardMaterial;
  material_4: MeshStandardMaterial;
};

type GLTFResult = GLTF & {
  nodes: {
    Fortress_Fortress_0: Mesh;
    Fortress_Fortress_0_1: Mesh;
    Fortress_Fortress_0_2: Mesh;
    Fortress_Environment_0: Mesh;
    Fortress_Sand_0: Mesh;
    Sea_Sea_0: Mesh;
    Sky_Sky_0: Mesh;
  };
  materials: IMaterials;
};

export default function Scene() {
  // Loading 3D gtlf model
  const { nodes, materials } = useGLTF(
    "/3d-models/lonely_watcher/source/sea_keep_lonely_watcher.gltf",
  ) as GLTFResult;

  // To fix materials becoming transparent while moving camera, issue with initila gtlf
  (Object.keys(materials) as Array<keyof IMaterials>).map(
    (name) => (materials[name].depthWrite = true),
  );

  return (
    <group>
      <group
        position={[17.117, 218.356, 23.591]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      >
        <group position={[33.745, 38.713, -60.289]}>
          <mesh
            geometry={nodes.Fortress_Fortress_0.geometry}
            material={materials.Fortress}
          />
          <mesh
            geometry={nodes.Fortress_Fortress_0_1.geometry}
            material={materials.Fortress}
          />
          <mesh
            geometry={nodes.Fortress_Fortress_0_2.geometry}
            material={materials.Fortress}
          />
          <mesh
            geometry={nodes.Fortress_Environment_0.geometry}
            material={materials.Environment}
          />
          <mesh
            geometry={nodes.Fortress_Sand_0.geometry}
            material={materials.Sand}
          />
        </group>
      </group>
      <mesh
        geometry={nodes.Sea_Sea_0.geometry}
        material={materials.material}
        position={[-1.388, 326.224, 14.92]}
        rotation={[-Math.PI / 2, 0, 0]}
        renderOrder={1}
      />
      <mesh
        geometry={nodes.Sky_Sky_0.geometry}
        material={materials.material_4}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
