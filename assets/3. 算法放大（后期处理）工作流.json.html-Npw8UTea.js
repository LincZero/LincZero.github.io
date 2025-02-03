import{_ as e,c as o,b as a,r as t,o as s}from"./app-B8XkoT7M.js";const l={};function p(i,r){const n=t("VueFlow");return s(),o("div",null,[a(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 8,
  "last_link_id": 6,
  "nodes": [
    {
      "id": 3,
      "type": "LoadImage",
      "pos": {
        "0": 600,
        "1": 330
      },
      "size": {
        "0": 280,
        "1": 314
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            2
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "00000-334733896.png",
        "image"
      ]
    },
    {
      "id": 6,
      "type": "ImageScaleBy",
      "pos": {
        "0": 910,
        "1": 520
      },
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 5,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            6
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "ImageScaleBy"
      },
      "widgets_values": [
        "nearest-exact",
        0.5
      ]
    },
    {
      "id": 7,
      "type": "SaveImage",
      "pos": {
        "0": 1250,
        "1": 320
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 6,
          "label": "图像"
        }
      ],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 5,
      "type": "UpscaleModelLoader",
      "pos": {
        "0": 910,
        "1": 320
      },
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "UPSCALE_MODEL",
          "type": "UPSCALE_MODEL",
          "links": [
            4
          ],
          "shape": 3,
          "label": "放大模型",
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "UpscaleModelLoader"
      },
      "widgets_values": [
        "RealESRGAN_x4plus.pth"
      ]
    },
    {
      "id": 2,
      "type": "ImageUpscaleWithModel",
      "pos": {
        "0": 950,
        "1": 430
      },
      "size": {
        "0": 241.79998779296875,
        "1": 46
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "upscale_model",
          "type": "UPSCALE_MODEL",
          "link": 4,
          "slot_index": 0,
          "label": "放大模型"
        },
        {
          "name": "image",
          "type": "IMAGE",
          "link": 2,
          "slot_index": 1,
          "label": "图像"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            5
          ],
          "slot_index": 0,
          "shape": 3,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "ImageUpscaleWithModel"
      },
      "widgets_values": []
    },
    {
      "id": 8,
      "type": "Note",
      "pos": {
        "0": -33,
        "1": 328
      },
      "size": [
        599.6632776624534,
        977.7704646144175
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "## Stable Diffustion 方式\\n\\n在SD UI里，有三种方式：\\n1. 文生图的 \\"高清修复\\" (Hi-res fix)\\n2. 图生图的 \\"SD放大\\" (SD Upscale) 脚本\\n3. 后期处理中的算法放大\\n\\n## ComfyUI 方式\\n\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\n里面有三个图(工作流)：\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\n2. hiresfix_esrgan_workflow\\n3. latent_upscale_different_prompt_model\\n\\n### Latent放大\\n\\nhiresfix_latent_workflow\\n\\n核心：\\n\\n1. Upscale Latent节点\\n   将一开始的768尺寸放大到1152尺寸\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\n2. 第二个KSample节点\\n   注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\n   于是就有了第二次KSample\\n\\n要项：\\n\\n1. 降噪强度(重绘强度)\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\n\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\n\\n### 放大模型放大\\n\\nhiresfix_esrgan_workflow\\n\\n借助ESRGAN等传统放大模型来实现这个放大过程，更复杂\\n\\n核心：\\n\\n1. VAE Decode，先解码成图片格式\\n2. 放大图片\\n   - Load Upscale Model，放大模型加载器\\n   - Upscale Image (using Model)，放大图片\\n   - Upscale Image\\n   这里的 Upscale Latent、Upscale Image 都是很像的，也都有by版本\\n3. VAE Encode，图片重新编码回来\\n4. 再KSampler图生图\\n\\n要项：\\n\\n- 这种方式在重绘时，哪怕以0.2~0.3这种低降噪采样，也不会出现噪声痕迹。\\n  即比Latent缩放的流程多出来的步骤，能让图片在重绘时使用更低的降噪采样。\\n  原因是：先解码变成图片，然后使用超分辨率放大模型的放大并不会轻易改变图片的原有内容（这与Latent直接缩放不同）\\n- 放大模型的选择\\n  \`Load Upscale Model\` 可以选择放大模型 (模型在 \`ComfyUI根目录/models/upscale_models\`)\\n  \`RealESRGAN_x4plus.pth\`，R-ESRGAN的4倍放大模型，目前泛用效果好的，适用于照片风格\\n  \`Anime 6B\` 适用于动漫插画风格的图像\\n  \`4xUltrasharp_4xUltrasharpV10.pth\` 放大过程中进行锐化\\n  （SD WebUI高清修复中选择放大算法时，就是选择的这些）\\n\\n选用、缺点：\\n\\n1. 低效。与Latent缩放相比，需要更多的计算和时间，容易暴显存\\n2. 降噪低不易重绘时增添更多细节，只是单纯放大原图容易让结果显得 “油腻”。而降噪高容易多手多头\\n\\n### 后期处理放大\\n\\n要项：\\n\\n- 放大模型加载器中，通常模型自带一个缩放倍数。如果想要再调整大小，需要额外加一个 Upscale Image By 节点\\n- 放大再采样时（采样一个大的东西）容易爆显存\\n  在SD里有一个脚本 (SD upscale) 用于专门解决这个问题，原理是将图片分块，依次重绘"
      ],
      "color": "#432",
      "bgcolor": "#653"
    }
  ],
  "links": [
    [
      2,
      3,
      0,
      2,
      1,
      "IMAGE"
    ],
    [
      4,
      5,
      0,
      2,
      0,
      "UPSCALE_MODEL"
    ],
    [
      5,
      2,
      0,
      6,
      0,
      "IMAGE"
    ],
    [
      6,
      6,
      0,
      7,
      0,
      "IMAGE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.9849732675807631,
      "offset": [
        651.6132957759582,
        -201.78445142917798
      ]
    },
    "0246.VERSION": [
      0,
      0,
      4
    ]
  },
  "version": 0.4
}
`})])}const m=e(l,[["render",p],["__file","3. 算法放大（后期处理）工作流.json.html.vue"]]),_=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/3.%20%E7%AE%97%E6%B3%95%E6%94%BE%E5%A4%A7%EF%BC%88%E5%90%8E%E6%9C%9F%E5%A4%84%E7%90%86%EF%BC%89%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html","title":"3. 算法放大（后期处理）工作流.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 8, \\"last_link_id\\": 6, \\"nodes\\": [ { \\"id\\": 3, \\"type\\": \\"LoadImage\\", \\"pos\\": { \\"0\\": 600, \\"1\\": 330 }, \\"size\\": { \\"0\\": 280, \\"1\\": 314 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\"...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-Linc/Nenly/%E7%AC%AC3%E8%AF%BE/%E9%AB%98%E6%B8%85%E6%94%BE%E5%A4%A7%E5%B7%A5%E4%BD%9C%E6%B5%81/3.%20%E7%AE%97%E6%B3%95%E6%94%BE%E5%A4%A7%EF%BC%88%E5%90%8E%E6%9C%9F%E5%A4%84%E7%90%86%EF%BC%89%E5%B7%A5%E4%BD%9C%E6%B5%81.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 8, \\"last_link_id\\": 6, \\"nodes\\": [ { \\"id\\": 3, \\"type\\": \\"LoadImage\\", \\"pos\\": { \\"0\\": 600, \\"1\\": 330 }, \\"size\\": { \\"0\\": 280, \\"1\\": 314 }, \\"flags\\": {}, \\"order\\": 0, \\"mode\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{},"readingTime":{"minutes":3.9,"words":1171},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/3. 算法放大（后期处理）工作流.json","excerpt":"<p>{\\n\\"last_node_id\\": 8,\\n\\"last_link_id\\": 6,\\n\\"nodes\\": [\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": {\\n\\"0\\": 600,\\n\\"1\\": 330\\n},\\n\\"size\\": {\\n\\"0\\": 280,\\n\\"1\\": 314\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n2\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": null,\\n\\"shape\\": 3,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"00000-334733896.png\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"ImageScaleBy\\",\\n\\"pos\\": {\\n\\"0\\": 910,\\n\\"1\\": 520\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 82\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 5,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n6\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageScaleBy\\"\\n},\\n\\"widgets_values\\": [\\n\\"nearest-exact\\",\\n0.5\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1250,\\n\\"1\\": 320\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 6,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 5,\\n\\"type\\": \\"UpscaleModelLoader\\",\\n\\"pos\\": {\\n\\"0\\": 910,\\n\\"1\\": 320\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 58\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"UPSCALE_MODEL\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"links\\": [\\n4\\n],\\n\\"shape\\": 3,\\n\\"label\\": \\"放大模型\\",\\n\\"slot_index\\": 0\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"UpscaleModelLoader\\"\\n},\\n\\"widgets_values\\": [\\n\\"RealESRGAN_x4plus.pth\\"\\n]\\n},\\n{\\n\\"id\\": 2,\\n\\"type\\": \\"ImageUpscaleWithModel\\",\\n\\"pos\\": {\\n\\"0\\": 950,\\n\\"1\\": 430\\n},\\n\\"size\\": {\\n\\"0\\": 241.79998779296875,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"upscale_model\\",\\n\\"type\\": \\"UPSCALE_MODEL\\",\\n\\"link\\": 4,\\n\\"slot_index\\": 0,\\n\\"label\\": \\"放大模型\\"\\n},\\n{\\n\\"name\\": \\"image\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 2,\\n\\"slot_index\\": 1,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n5\\n],\\n\\"slot_index\\": 0,\\n\\"shape\\": 3,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"ImageUpscaleWithModel\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"Note\\",\\n\\"pos\\": {\\n\\"0\\": -33,\\n\\"1\\": 328\\n},\\n\\"size\\": [\\n599.6632776624534,\\n977.7704646144175\\n],\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"## Stable Diffustion 方式\\\\n\\\\n在SD UI里，有三种方式：\\\\n1. 文生图的 \\"高清修复\\" (Hi-res fix)\\\\n2. 图生图的 \\"SD放大\\" (SD Upscale) 脚本\\\\n3. 后期处理中的算法放大\\\\n\\\\n## ComfyUI 方式\\\\n\\\\n而ComfyUI里，也有类似的方式，例如官方示例/2_pass_text2img的方式\\\\n里面有三个图(工作流)：\\\\n1. hiresfix_latent_workflow (标准的文生图高清修复工作流)\\\\n2. hiresfix_esrgan_workflow\\\\n3. latent_upscale_different_prompt_model\\\\n\\\\n### Latent放大\\\\n\\\\nhiresfix_latent_workflow\\\\n\\\\n核心：\\\\n\\\\n1. Upscale Latent节点\\\\n   将一开始的768尺寸放大到1152尺寸\\\\n   该节点还有另一个版本：Upscale Latent By，按倍数进行缩放\\\\n2. 第二个KSample节点\\\\n   注意该方式只会做拉伸，并不会对原图进行细节的填充，所以还需要重新采样一次\\\\n   于是就有了第二次KSample\\\\n\\\\n要项：\\\\n\\\\n1. 降噪强度(重绘强度)\\\\n   第二个KSampler相当于图生图的采样器，denoise决定第二次生成的降噪力度。拉到1相当于重新生成一张图。\\\\n   推荐：0.5~0.8 (更像~更多细节，不要低于0.5，不然容易出现噪声没去干净)\\\\n\\\\n哪怕降噪强度0.5也出现更多细节怎么办？例如多手多头。这时需要使用第二个降噪工作流 hiresfix_esrgan_workflow\\\\n\\\\n### 放大模型放大\\\\n\\\\nhiresfix_esrgan_workflow\\\\n\\\\n借助ESRGAN等传统放大模型来实现这个放大过程，更复杂\\\\n\\\\n核心：\\\\n\\\\n1. VAE Decode，先解码成图片格式\\\\n2. 放大图片\\\\n   - Load Upscale Model，放大模型加载器\\\\n   - Upscale Image (using Model)，放大图片\\\\n   - Upscale Image\\\\n   这里的 Upscale Latent、Upscale Image 都是很像的，也都有by版本\\\\n3. VAE Encode，图片重新编码回来\\\\n4. 再KSampler图生图\\\\n\\\\n要项：\\\\n\\\\n- 这种方式在重绘时，哪怕以0.2~0.3这种低降噪采样，也不会出现噪声痕迹。\\\\n  即比Latent缩放的流程多出来的步骤，能让图片在重绘时使用更低的降噪采样。\\\\n  原因是：先解码变成图片，然后使用超分辨率放大模型的放大并不会轻易改变图片的原有内容（这与Latent直接缩放不同）\\\\n- 放大模型的选择\\\\n  <code>Load Upscale Model</code> 可以选择放大模型 (模型在 <code>ComfyUI根目录/models/upscale_models</code>)\\\\n  <code>RealESRGAN_x4plus.pth</code>，R-ESRGAN的4倍放大模型，目前泛用效果好的，适用于照片风格\\\\n  <code>Anime 6B</code> 适用于动漫插画风格的图像\\\\n  <code>4xUltrasharp_4xUltrasharpV10.pth</code> 放大过程中进行锐化\\\\n  （SD WebUI高清修复中选择放大算法时，就是选择的这些）\\\\n\\\\n选用、缺点：\\\\n\\\\n1. 低效。与Latent缩放相比，需要更多的计算和时间，容易暴显存\\\\n2. 降噪低不易重绘时增添更多细节，只是单纯放大原图容易让结果显得 “油腻”。而降噪高容易多手多头\\\\n\\\\n### 后期处理放大\\\\n\\\\n要项：\\\\n\\\\n- 放大模型加载器中，通常模型自带一个缩放倍数。如果想要再调整大小，需要额外加一个 Upscale Image By 节点\\\\n- 放大再采样时（采样一个大的东西）容易爆显存\\\\n  在SD里有一个脚本 (SD upscale) 用于专门解决这个问题，原理是将图片分块，依次重绘\\"\\n],\\n\\"color\\": \\"#432\\",\\n\\"bgcolor\\": \\"#653\\"\\n}\\n],\\n\\"links\\": [\\n[\\n2,\\n3,\\n0,\\n2,\\n1,\\n\\"IMAGE\\"\\n],\\n[\\n4,\\n5,\\n0,\\n2,\\n0,\\n\\"UPSCALE_MODEL\\"\\n],\\n[\\n5,\\n2,\\n0,\\n6,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n6,\\n6,\\n0,\\n7,\\n0,\\n\\"IMAGE\\"\\n]\\n],\\n\\"groups\\": [],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 0.9849732675807631,\\n\\"offset\\": [\\n651.6132957759582,\\n-201.78445142917798\\n]\\n},\\n\\"0246.VERSION\\": [\\n0,\\n0,\\n4\\n]\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/3. 算法放大（后期处理）工作流.json","value":{"title":"3. 算法放大（后期处理）工作流.json","path":"MdNote_Other/ComfyUI-Workflows-Linc/Nenly/第3课/高清放大工作流/3. 算法放大（后期处理）工作流.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,_ as data};
