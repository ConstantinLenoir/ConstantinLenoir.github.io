

class Showcase {
    constructor () {
        // page_id, url
        this.pages = {
            first_page: "html/first_page.html"
        }
        //
        this.index = this.index.bind(this);
        this.set_page = this.set_page.bind(this);
        this.handle_page_request = this.handle_page_request.bind(this);
        this.navigate = this.navigate.bind(this);
        //
        // This function makes it possible to handle GET requests on
        // the frontend!
        this.process_query_string();
        //
        // To manage SPA history.
        window.addEventListener('popstate', this.navigate)
        //
        // Event binding
        let page_elements = document.querySelectorAll(".page");
        page_elements.forEach(
            (element) => {
                element.addEventListener("click", this.handle_page_request);
            });
        //
        let element = document.getElementById("logo");
        element.addEventListener("click", this.index);
        //
        
    }


    handle_page_request(e) {
        let page_id = e.target.getAttribute("data-page");
        this.set_page(page_id);
        if (history.state["page_id"] != page_id) {
            history.pushState({page_id: page_id},
                '',
                `?page=${page_id}`);
        }
    }

    set_default_content() {
        let element = document.querySelector("#main_page > h1");
        element.innerText = "Je m'appelle Constantin Lenoir.";

    }

    process_query_string() {
        let query_string = new URLSearchParams(window.location.search);
        let page_found = false;
        if (query_string.get("page")) {
            //
            let page_id = query_string.get("page");
            page_found = this.set_page(page_id);
        }
        if (!page_found){
            history.replaceState({page_id:"index"}, '', '');
            this.set_default_content();
        }
    }

    index(e) {
        window.location.assign("index.html");
    }

    set_page(page_id) {
        if (this.pages[page_id]) {
            fetch(this.pages[page_id])
                .then((resp) => resp.text())
                .then((text) => this.update(text, "page_root"))
                .catch(console.log);
            return true;
        }
        return false;
    }

    navigate(e) {
        // history.state
        let page_id = e.state["page_id"];
        if (page_id == "index") {
            this.index(null);
        } else {
            this.set_page(page_id);
        }
    }


    update(text, element_id) {
         // "page_root"
        let old_page = document.getElementById(element_id);
        let new_page = old_page.cloneNode(false);
        new_page.innerHTML = text;
        old_page.parentNode.replaceChild(new_page, old_page);
    }

    bfs(node) {
        let queue = [node];
        let level_queue = [0];
        let title_tags = ["H1", "H2", "H3", "H4", "H5", "H6"];
        while (queue.length > 0) {
            let node = queue.pop();
            let level = level_queue.pop();
            let child_nodes = node.childNodes;
            for (let i = 0; i < child_nodes.length;) {
                queue.unshift(child_nodes[i]);
                level_queue.unshift(level + 1);
                if (child_nodes[i].nodeType == Node.ELEMENT_NODE &&
                        title_tags.includes(child_nodes[i].tagName)) {
                    // child_nodes[i].className.includes("section")
                    //
                    console.log(level + 1, child_nodes[i].innerText);
                }
                i++;
            }
        }
        // unshift(node) and pop()
    }

}

showcase = new Showcase();

