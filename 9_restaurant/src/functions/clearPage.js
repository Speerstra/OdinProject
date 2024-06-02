// removes content style attributes
// removes content children except header (=content.children[0])

const clearPage = function(){
        const content = document.querySelector('#content');
        content.style="";
        
        while (content.children.length > 1) {
                content.children[1].remove();
        }
};
    
export default clearPage;