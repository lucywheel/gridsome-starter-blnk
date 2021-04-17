---
title: "Another Post"
date: "2020-04-08"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in mauris molestie, fermentum felis consequat, luctus enim. Pellentesque in aliquet mi. Duis interdum, est condimentum iaculis posuere, justo odio porta tortor, at sollicitudin eros tortor at magna. Suspendisse non ex a nibh varius fringilla. Mauris vulputate dolor est, eget faucibus est lobortis a. Nunc rutrum, magna et rutrum tempor, lorem tortor ullamcorper eros, sed porta libero elit id tortor."
---
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in mauris molestie, fermentum felis consequat, luctus enim. Pellentesque in aliquet mi. Duis interdum, est condimentum iaculis posuere, justo odio porta tortor, at sollicitudin eros tortor at magna. Suspendisse non ex a nibh varius fringilla. Mauris vulputate dolor est, eget faucibus est lobortis a. Nunc rutrum, magna et rutrum tempor, lorem tortor ullamcorper eros, sed porta libero elit id tortor. Vivamus lacinia nisl nec nibh fermentum, ac auctor orci hendrerit. In facilisis interdum nunc, id efficitur ligula sodales viverra. Nullam pulvinar maximus sapien. Praesent pellentesque facilisis nisl, vitae gravida dui sodales sed. Proin ac purus fermentum, viverra nisl ut, placerat magna. Proin elementum, leo ut bibendum commodo, lacus augue vulputate tellus, sed finibus mauris lectus tristique dolor. Sed augue felis, finibus sit amet elit interdum, aliquam venenatis nunc.

- Nam sed magna ut nunc lobortis dignissim.
- Nam sed magna ut nunc lobortis dignissim.
- Nam sed magna ut nunc lobortis dignissim.
- Nam sed magna ut nunc lobortis dignissim.

1. Nam sed magna ut nunc lobortis dignissim.
2. Nam sed magna ut nunc lobortis dignissim.
3. Nam sed magna ut nunc lobortis dignissim.
4. Nam sed magna ut nunc lobortis dignissim.

[This is Link](https://www.example.com)

**Morbi vel efficitur dui**. Donec sagittis finibus mauris et lobortis. Sed sed semper nisi, ut scelerisque leo. Curabitur euismod tortor nec est sollicitudin accumsan. Mauris et molestie elit. Donec auctor ex sapien, a volutpat nunc ullamcorper eu. Nulla sit amet ornare velit. Nullam posuere pharetra commodo. Sed nec fermentum dui, sed placerat magna. ~Morbi vulputate lacus ac eleifend ultrices.~ Maecenas fermentum massa in erat tincidunt facilisis sed at felis. ~~Morbi volutpat elit~~ et mi ultricies, malesuada laoreet turpis venenatis. 

> "Curabitur dignissim mauris eget felis suscipit porta. Curabitur a ante nec ipsum pretium gravida nec sit amet mi."

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ornare *maximus maximus*. Curabitur ullamcorper gravida venenatis. Donec eros odio, suscipit non laoreet non, viverra sed libero. Nullam vel ligula in nisi convallis lobortis. Duis cursus, orci a malesuada mattis, erat neque cursus metus, eu ullamcorper lectus lectus et augue. Sed porttitor velit quis odio molestie fermentum. Curabitur ultrices leo mauris, sed feugiat dui dignissim id. Sed vehicula orci nec justo molestie imperdiet.

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

```html
<div class="bg-gray-600">
  <div class="container mx-auto px-5 max-w-screen-xl flex flex-col md:flex-row pt-24 pb-32">
    <div class="mx-auto w-full sm:w-8/12">
      <article class="pb-0.5 border-b border-gray-800" v-for="post in $page.allPost.edges" v-bind="post.node.id">
        <time class="flex pb-4" datetime="ADD">{{ post.node.date }}</time>
        <h4 class="pb-4">{{ post.node.title }}</h4>
        <p class="pb-8">{{ post.node.excerpt }}</p>
        <div>
          <g-link class="pb-1 border-b border-white" :to="post.node.path">Read More</g-link>
        </div>
      </article>
    </div>
  </div>
</div>
```

[^1]: This is the footnote. 