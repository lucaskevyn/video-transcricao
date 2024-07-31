// import '@vidstack/react/player/styles/default/theme.css';
// import '@vidstack/react/player/styles/default/layouts/video.css';
// import { MediaPlayer, MediaProvider } from '@vidstack/react';
// import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { ScrollArea } from '@/components/ui/scroll-area';
// export default function Home() {
//   return   <div className="flex flex-1 items-center justify-center h-screen">
//   <div className="flex flex-col lg:flex-row w-8/12 gap-4">
//   {/* <div className="grid lg:grid-cols-2 w-8/12 gap-4 items-stretch">  */}
//   <div  className="w-full h-96">
//       <MediaPlayer
//         className="h-96"
//           title= "Café com inovação"
//               src="https://minio.tjro.jus.br/dev-cejusc/2024/05/30/Cafe%CC%81%20com%20Inovac%CC%A7a%CC%83o%20-%20Melhore%20sua%20vida%20com%20criatividade%20e%20inovac%CC%A7a%CC%83o.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ADPJB0VU56B3AH9RRSVR%2F20240729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240729T114836Z&X-Amz-Expires=43200&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJBRFBKQjBWVTU2QjNBSDlSUlNWUiIsImF0X2hhc2giOiJrcV9GR3ltNWhTSEVOSHNzaFZYSjhBIiwiYXVkIjoibWluaW8iLCJhdXRoX3RpbWUiOjE3MjE2NjkwNDQsImF6cCI6Im1pbmlvIiwiZW1haWwiOiJnaW92YW5pZmVybmFuZGVzQHRqcm8uanVzLmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV4cCI6MTcyMjI1NzMwMywiZmFtaWx5X25hbWUiOiJGZXJuYW5kZXMgZG9zIFNhbnRvcyBPbGl2ZWlyYSIsImdpdmVuX25hbWUiOiJHaW92YW5pIEZlcm5hbmRlcyBkb3MgU2FudG9zIE9saXZlaXJhIiwiaWF0IjoxNzIyMjUzNzA0LCJpc3MiOiJodHRwczovL3Nzby50anJvLmp1cy5ici9hdXRoL3JlYWxtcy9QSlJPIiwianRpIjoiN2EzMTQ5M2QtMjVjMy00Njg5LTljZjYtZThkN2UwOGQ1OThhIiwibmFtZSI6Ikdpb3ZhbmkgRmVybmFuZGVzIGRvcyBTYW50b3MgT2xpdmVpcmEgRmVybmFuZGVzIGRvcyBTYW50b3MgT2xpdmVpcmEiLCJwb2xpY3kiOiJjb25zb2xlRGV2IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTAwMTY0Iiwic2Vzc2lvbl9zdGF0ZSI6IjU5NWEzN2NkLWZiMTUtNDUyNi1iZGVhLTQwMzdjYzU5YWZkZCIsInNpZCI6IjU5NWEzN2NkLWZiMTUtNDUyNi1iZGVhLTQwMzdjYzU5YWZkZCIsInN1YiI6IjhkZDNkMWZlLTI3NDUtNDNjNC1hYjAzLWFkOWI1ZDc2ODMzNyIsInR5cCI6IklEIn0.IOsj72n9Lm-Oi0V3dFrjSn3ZzZjjjbPXhseXyAFshi6U7D3bgEsM0UTtZzZ40GOgQeCPnrTt7taPqCMu8tco7A&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=cd6b62f27dbc4d02312373f4f6d9f54cdb2af6dcaa5a485f29780c366e40a5f0">
//       <MediaProvider className='' />
//         <DefaultVideoLayout
//         className=''
//         thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
//         icons={defaultLayoutIcons}/>
//         </MediaPlayer>
//         </div>
//         <ScrollArea >
//       <div className="w-full">
//       <Card className="max-h-40">
//   <CardHeader>
//     <CardTitle>Café com Inovação</CardTitle>
//     <CardDescription>Tribunal de Justiça do Estado de Rondônia</CardDescription>
//   </CardHeader>
//   <CardContent>
//     <p>Transcrição do vídeo</p>
//   </CardContent>
//   <CardFooter>
//     <p className='overflow-y: auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//   </CardFooter>
// </Card>
// </div>
// </ScrollArea>
//     </div>
//     </div>
//     {/* // </div>  */}

// }
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center h-screen">
      <div className="grid lg:grid-cols-2 w-8/12 gap-4 items-stretch">
        <div className="">
          <MediaPlayer
            className="h-full"
            title="Café com Inovação"
            src="https://www.youtube.com/watch?v=Rt6pWMpB4pQ&list=PL8HkCX2C5h0VGhZnfbwf2hq7yD7nXMbJJ&index=11">
            <MediaProvider />
            <DefaultVideoLayout
              thumbnails="https://www.youtube.com/watch?v=Rt6pWMpB4pQ&list=PL8HkCX2C5h0VGhZnfbwf2hq7yD7nXMbJJ&index=11"
              icons={defaultLayoutIcons}
            />
          </MediaPlayer>
        </div>
        <div >
        <Card>
          <CardHeader>
            <CardTitle>Café com Inovação</CardTitle>
            <CardDescription>
              Tribunal de Justiça do Estado de Rondônia
            </CardDescription>
          </CardHeader>
          <ScrollArea className="h-[250px] test-justify">
            <CardContent>
              <p className="font-bold ">Transcrição do vídeo</p>
              <p>
                Plantei uma roseira O vento no cume bate A rosa no cume cheira
                Quando vem a chuva fina Salpicos no cume caem Formigas no cume
                entram Abelhas do cume saem Quando cai a chuva grossa A água do
                cume desce O barro do cume escorre O mato no cume cresce Então,
                quando cessa a chuva No cume volta a alegria Pois torna a
                brilhar de novo O Sol que no cume ardia No alto daquele cume
                Plantei uma roseira O vento no cume bate A rosa no cume cheira
                Quando vem a chuva fina Salpicos no cume caem Formigas no cume
                entram Abelhas do cume saem Quando cai a chuva grossa A água do
                cume desce O barro do cume escorre O mato no cume cresce Então,
                quando cessa a chuva No cume volta a alegria Pois torna a
                brilhar de novo O Sol que no cume ardia Pois torna a brilhar de
                novo O Sol que no cume ardia Pois torna a brilhar de novo O Sol
                que no cume ardia
              </p>
            </CardContent>
          </ScrollArea>
        </Card>
        </div>
      </div>
    </div>
  );
}
