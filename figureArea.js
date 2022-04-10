function figureArea (w,h,H,W){
    let area1 = H*W;
    let area2 = h*w;
    let area3 = H*w;
    let area = area1+area2-area3;
    return area;
}

console.log(figureArea('2','4','3','5'));
