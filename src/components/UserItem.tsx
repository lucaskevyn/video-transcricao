'use client';
export default function UserItem () {
    return <div className="flex items-center justify-between gap-4"> 
    <div className="avatar rounded-full min-h-11 min-w-11 bg-emerald-500 text-white font-[700] flex items-center justify-center">
    <p>DD</p>
    </div>
    <div className="hidden">
    <p className="text-[16px] font-bold">Dannyela Denny</p>
    <p className="text-[12px] text-neutral-500">dennydannyela@gmail.com</p>
    </div>
    </div>;
}