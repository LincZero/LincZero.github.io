import{_ as t,c as o,b as u,r,o as q}from"./app-C8fCxSCu.js";const e={};function b(a,i){const n=r("VueFlow");return q(),o("div",null,[u(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 38,
  "last_link_id": 54,
  "nodes": [
    {
      "id": 4,
      "type": "LivePortraitLoadFaceAlignmentCropper",
      "pos": [
        100,
        1130
      ],
      "size": {
        "0": 510,
        "1": 210
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "cropper",
          "type": "LPCROPPER",
          "links": [
            26
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "LivePortraitLoadFaceAlignmentCropper"
      },
      "widgets_values": [
        "blazeface",
        "torch_gpu",
        "cuda",
        "fp16",
        true
      ]
    },
    {
      "id": 1,
      "type": "DownloadAndLoadLivePortraitModels",
      "pos": [
        100,
        1000
      ],
      "size": {
        "0": 510,
        "1": 82
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "live_portrait_pipe",
          "type": "LIVEPORTRAITPIPE",
          "links": [
            1,
            5
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DownloadAndLoadLivePortraitModels"
      },
      "widgets_values": [
        "auto",
        "animal"
      ]
    },
    {
      "id": 17,
      "type": "VHS_VideoCombine",
      "pos": [
        1180,
        1390
      ],
      "size": [
        490,
        794
      ],
      "flags": {
        "collapsed": false
      },
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 23,
          "slot_index": 0
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "link": null
        },
        {
          "name": "meta_batch",
          "type": "VHS_BatchManager",
          "link": null
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "Filenames",
          "type": "VHS_FILENAMES",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "VHS_VideoCombine"
      },
      "widgets_values": {
        "frame_rate": 30,
        "loop_count": 0,
        "filename_prefix": "LP AM",
        "format": "video/h264-mp4",
        "pix_fmt": "yuv420p",
        "crf": 19,
        "save_metadata": true,
        "pingpong": false,
        "save_output": true,
        "videopreview": {
          "hidden": false,
          "paused": false,
          "params": {
            "filename": "LP AM_00020.mp4",
            "subfolder": "",
            "type": "output",
            "format": "video/h264-mp4",
            "frame_rate": 30
          }
        }
      }
    },
    {
      "id": 5,
      "type": "LivePortraitProcess",
      "pos": [
        990,
        1000
      ],
      "size": [
        330,
        340
      ],
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "pipeline",
          "type": "LIVEPORTRAITPIPE",
          "link": 5,
          "slot_index": 0
        },
        {
          "name": "crop_info",
          "type": "CROPINFO",
          "link": 4
        },
        {
          "name": "source_image",
          "type": "IMAGE",
          "link": 9,
          "slot_index": 2
        },
        {
          "name": "driving_images",
          "type": "IMAGE",
          "link": 7
        },
        {
          "name": "opt_retargeting_info",
          "type": "RETARGETINGINFO",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "cropped_image",
          "type": "IMAGE",
          "links": [
            17
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "output",
          "type": "LP_OUT",
          "links": [
            15
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LivePortraitProcess"
      },
      "widgets_values": [
        false,
        0.03,
        true,
        1,
        "constant",
        "relative",
        0.000003,
        false,
        1
      ]
    },
    {
      "id": 12,
      "type": "LivePortraitComposite",
      "pos": [
        1340,
        1000
      ],
      "size": {
        "0": 240,
        "1": 90
      },
      "flags": {
        "collapsed": true
      },
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "source_image",
          "type": "IMAGE",
          "link": 16,
          "slot_index": 0
        },
        {
          "name": "cropped_image",
          "type": "IMAGE",
          "link": 17
        },
        {
          "name": "liveportrait_out",
          "type": "LP_OUT",
          "link": 15
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "full_images",
          "type": "IMAGE",
          "links": [
            23
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "mask",
          "type": "MASK",
          "links": null,
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LivePortraitComposite"
      }
    },
    {
      "id": 11,
      "type": "PreviewImage",
      "pos": [
        1340,
        1050
      ],
      "size": [
        330,
        290
      ],
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 13
        }
      ],
      "properties": {
        "Node name for S&R": "PreviewImage"
      }
    },
    {
      "id": 8,
      "type": "ImageScale",
      "pos": [
        100,
        1390
      ],
      "size": {
        "0": 510,
        "1": 150
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "image",
          "type": "IMAGE",
          "link": 8
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            9,
            10,
            16
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ImageScale"
      },
      "widgets_values": [
        "nearest-exact",
        512,
        512,
        "center"
      ]
    },
    {
      "id": 7,
      "type": "VHS_LoadVideo",
      "pos": [
        630,
        1390
      ],
      "size": [
        530,
        790
      ],
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [
        {
          "name": "meta_batch",
          "type": "VHS_BatchManager",
          "link": null
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": null
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            7
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "frame_count",
          "type": "INT",
          "links": null,
          "shape": 3
        },
        {
          "name": "audio",
          "type": "AUDIO",
          "links": null,
          "shape": 3
        },
        {
          "name": "video_info",
          "type": "VHS_VIDEOINFO",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "VHS_LoadVideo"
      },
      "widgets_values": {
        "video": "d6.mp4",
        "force_rate": 0,
        "force_size": "Disabled",
        "custom_width": 512,
        "custom_height": 512,
        "frame_load_cap": 120,
        "skip_first_frames": 0,
        "select_every_nth": 1,
        "choose video to upload": "image",
        "videopreview": {
          "hidden": false,
          "paused": false,
          "params": {
            "frame_load_cap": 120,
            "skip_first_frames": 0,
            "force_rate": 0,
            "select_every_nth": 1,
            "filename": "d6.mp4",
            "type": "input",
            "format": "video/mp4"
          }
        }
      }
    },
    {
      "id": 6,
      "type": "LoadImage",
      "pos": [
        100,
        1590
      ],
      "size": {
        "0": 510,
        "1": 590
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            8
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "u=1088737114,3070841736&fm=253&fmt=auto&app=120&f=JPEG.webp",
        "image"
      ]
    },
    {
      "id": 2,
      "type": "LivePortraitCropper",
      "pos": [
        630,
        1000
      ],
      "size": [
        340,
        340
      ],
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "pipeline",
          "type": "LIVEPORTRAITPIPE",
          "link": 1
        },
        {
          "name": "cropper",
          "type": "LPCROPPER",
          "link": 26,
          "slot_index": 1
        },
        {
          "name": "source_image",
          "type": "IMAGE",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "cropped_image",
          "type": "IMAGE",
          "links": [
            13
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "crop_info",
          "type": "CROPINFO",
          "links": [
            4
          ],
          "shape": 3,
          "slot_index": 1
        }
      ],
      "properties": {
        "Node name for S&R": "LivePortraitCropper"
      },
      "widgets_values": [
        512,
        2.5,
        0,
        0,
        0,
        "large-small",
        false
      ]
    }
  ],
  "links": [
    [
      1,
      1,
      0,
      2,
      0,
      "LIVEPORTRAITPIPE"
    ],
    [
      4,
      2,
      1,
      5,
      1,
      "CROPINFO"
    ],
    [
      5,
      1,
      0,
      5,
      0,
      "LIVEPORTRAITPIPE"
    ],
    [
      7,
      7,
      0,
      5,
      3,
      "IMAGE"
    ],
    [
      8,
      6,
      0,
      8,
      0,
      "IMAGE"
    ],
    [
      9,
      8,
      0,
      5,
      2,
      "IMAGE"
    ],
    [
      10,
      8,
      0,
      2,
      2,
      "IMAGE"
    ],
    [
      13,
      2,
      0,
      11,
      0,
      "IMAGE"
    ],
    [
      15,
      5,
      1,
      12,
      2,
      "LP_OUT"
    ],
    [
      16,
      8,
      0,
      12,
      0,
      "IMAGE"
    ],
    [
      17,
      5,
      0,
      12,
      1,
      "IMAGE"
    ],
    [
      23,
      12,
      0,
      17,
      0,
      "IMAGE"
    ],
    [
      26,
      4,
      0,
      2,
      1,
      "LPCROPPER"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1,
      "offset": [
        92.39030360014146,
        -785.0522431015163
      ]
    }
  },
  "version": 0.4
}
`})])}const p=t(e,[["render",b]]),l=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait%20Animals%201.0%E3%80%90Zho%E3%80%91.json.html","title":"LivePortrait Animals 1.0【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ &quot;last_node_id&quot;: 38, &quot;last_link_id&quot;: 54, &quot;nodes&quot;: [ { &quot;id&quot;: 4, &quot;type&quot;: &quot;LivePortraitLoadFaceAlignmentCropper&quot;, &quot...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait%20Animals%201.0%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ &quot;last_node_id&quot;: 38, &quot;last_link_id&quot;: 54, &quot;nodes&quot;: [ { &quot;id&quot;: 4, &quot;type&quot;: &quot;LivePortraitLoadFaceAlignmentCropper&quot;, &quot..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.52,"words":755},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait Animals 1.0【Zho】.json","excerpt":"<p>{<br>\\n&quot;last_node_id&quot;: 38,<br>\\n&quot;last_link_id&quot;: 54,<br>\\n&quot;nodes&quot;: [<br>\\n{<br>\\n&quot;id&quot;: 4,<br>\\n&quot;type&quot;: &quot;LivePortraitLoadFaceAlignmentCropper&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n1130<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 510,<br>\\n&quot;1&quot;: 210<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 0,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;cropper&quot;,<br>\\n&quot;type&quot;: &quot;LPCROPPER&quot;,<br>\\n&quot;links&quot;: [<br>\\n26<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LivePortraitLoadFaceAlignmentCropper&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;blazeface&quot;,<br>\\n&quot;torch_gpu&quot;,<br>\\n&quot;cuda&quot;,<br>\\n&quot;fp16&quot;,<br>\\ntrue<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 1,<br>\\n&quot;type&quot;: &quot;DownloadAndLoadLivePortraitModels&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n1000<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 510,<br>\\n&quot;1&quot;: 82<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 1,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;live_portrait_pipe&quot;,<br>\\n&quot;type&quot;: &quot;LIVEPORTRAITPIPE&quot;,<br>\\n&quot;links&quot;: [<br>\\n1,<br>\\n5<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;DownloadAndLoadLivePortraitModels&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;auto&quot;,<br>\\n&quot;animal&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 17,<br>\\n&quot;type&quot;: &quot;VHS_VideoCombine&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1180,<br>\\n1390<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n490,<br>\\n794<br>\\n],<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: false<br>\\n},<br>\\n&quot;order&quot;: 9,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 23,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;audio&quot;,<br>\\n&quot;type&quot;: &quot;AUDIO&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;meta_batch&quot;,<br>\\n&quot;type&quot;: &quot;VHS_BatchManager&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;Filenames&quot;,<br>\\n&quot;type&quot;: &quot;VHS_FILENAMES&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VHS_VideoCombine&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: {<br>\\n&quot;frame_rate&quot;: 30,<br>\\n&quot;loop_count&quot;: 0,<br>\\n&quot;filename_prefix&quot;: &quot;LP AM&quot;,<br>\\n&quot;format&quot;: &quot;video/h264-mp4&quot;,<br>\\n&quot;pix_fmt&quot;: &quot;yuv420p&quot;,<br>\\n&quot;crf&quot;: 19,<br>\\n&quot;save_metadata&quot;: true,<br>\\n&quot;pingpong&quot;: false,<br>\\n&quot;save_output&quot;: true,<br>\\n&quot;videopreview&quot;: {<br>\\n&quot;hidden&quot;: false,<br>\\n&quot;paused&quot;: false,<br>\\n&quot;params&quot;: {<br>\\n&quot;filename&quot;: &quot;LP AM_00020.mp4&quot;,<br>\\n&quot;subfolder&quot;: &quot;&quot;,<br>\\n&quot;type&quot;: &quot;output&quot;,<br>\\n&quot;format&quot;: &quot;video/h264-mp4&quot;,<br>\\n&quot;frame_rate&quot;: 30<br>\\n}<br>\\n}<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 5,<br>\\n&quot;type&quot;: &quot;LivePortraitProcess&quot;,<br>\\n&quot;pos&quot;: [<br>\\n990,<br>\\n1000<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n330,<br>\\n340<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 7,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;pipeline&quot;,<br>\\n&quot;type&quot;: &quot;LIVEPORTRAITPIPE&quot;,<br>\\n&quot;link&quot;: 5,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;crop_info&quot;,<br>\\n&quot;type&quot;: &quot;CROPINFO&quot;,<br>\\n&quot;link&quot;: 4<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;source_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 9,<br>\\n&quot;slot_index&quot;: 2<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;driving_images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 7<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;opt_retargeting_info&quot;,<br>\\n&quot;type&quot;: &quot;RETARGETINGINFO&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;cropped_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n17<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;output&quot;,<br>\\n&quot;type&quot;: &quot;LP_OUT&quot;,<br>\\n&quot;links&quot;: [<br>\\n15<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LivePortraitProcess&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\nfalse,<br>\\n0.03,<br>\\ntrue,<br>\\n1,<br>\\n&quot;constant&quot;,<br>\\n&quot;relative&quot;,<br>\\n0.000003,<br>\\nfalse,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 12,<br>\\n&quot;type&quot;: &quot;LivePortraitComposite&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1340,<br>\\n1000<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 240,<br>\\n&quot;1&quot;: 90<br>\\n},<br>\\n&quot;flags&quot;: {<br>\\n&quot;collapsed&quot;: true<br>\\n},<br>\\n&quot;order&quot;: 8,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;source_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 16,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;cropped_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 17<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;liveportrait_out&quot;,<br>\\n&quot;type&quot;: &quot;LP_OUT&quot;,<br>\\n&quot;link&quot;: 15<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;full_images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n23<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;mask&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LivePortraitComposite&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 11,<br>\\n&quot;type&quot;: &quot;PreviewImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n1340,<br>\\n1050<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n330,<br>\\n290<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 6,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;images&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 13<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;PreviewImage&quot;<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 8,<br>\\n&quot;type&quot;: &quot;ImageScale&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n1390<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 510,<br>\\n&quot;1&quot;: 150<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 4,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 8<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n9,<br>\\n10,<br>\\n16<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;ImageScale&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;nearest-exact&quot;,<br>\\n512,<br>\\n512,<br>\\n&quot;center&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 7,<br>\\n&quot;type&quot;: &quot;VHS_LoadVideo&quot;,<br>\\n&quot;pos&quot;: [<br>\\n630,<br>\\n1390<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n530,<br>\\n790<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 2,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;meta_batch&quot;,<br>\\n&quot;type&quot;: &quot;VHS_BatchManager&quot;,<br>\\n&quot;link&quot;: null<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;vae&quot;,<br>\\n&quot;type&quot;: &quot;VAE&quot;,<br>\\n&quot;link&quot;: null<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n7<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;frame_count&quot;,<br>\\n&quot;type&quot;: &quot;INT&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;audio&quot;,<br>\\n&quot;type&quot;: &quot;AUDIO&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;video_info&quot;,<br>\\n&quot;type&quot;: &quot;VHS_VIDEOINFO&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;VHS_LoadVideo&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: {<br>\\n&quot;video&quot;: &quot;d6.mp4&quot;,<br>\\n&quot;force_rate&quot;: 0,<br>\\n&quot;force_size&quot;: &quot;Disabled&quot;,<br>\\n&quot;custom_width&quot;: 512,<br>\\n&quot;custom_height&quot;: 512,<br>\\n&quot;frame_load_cap&quot;: 120,<br>\\n&quot;skip_first_frames&quot;: 0,<br>\\n&quot;select_every_nth&quot;: 1,<br>\\n&quot;choose video to upload&quot;: &quot;image&quot;,<br>\\n&quot;videopreview&quot;: {<br>\\n&quot;hidden&quot;: false,<br>\\n&quot;paused&quot;: false,<br>\\n&quot;params&quot;: {<br>\\n&quot;frame_load_cap&quot;: 120,<br>\\n&quot;skip_first_frames&quot;: 0,<br>\\n&quot;force_rate&quot;: 0,<br>\\n&quot;select_every_nth&quot;: 1,<br>\\n&quot;filename&quot;: &quot;d6.mp4&quot;,<br>\\n&quot;type&quot;: &quot;input&quot;,<br>\\n&quot;format&quot;: &quot;video/mp4&quot;<br>\\n}<br>\\n}<br>\\n}<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 6,<br>\\n&quot;type&quot;: &quot;LoadImage&quot;,<br>\\n&quot;pos&quot;: [<br>\\n100,<br>\\n1590<br>\\n],<br>\\n&quot;size&quot;: {<br>\\n&quot;0&quot;: 510,<br>\\n&quot;1&quot;: 590<br>\\n},<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 3,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;IMAGE&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n8<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;MASK&quot;,<br>\\n&quot;type&quot;: &quot;MASK&quot;,<br>\\n&quot;links&quot;: null,<br>\\n&quot;shape&quot;: 3<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LoadImage&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n&quot;u=1088737114,3070841736&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG.webp&quot;,<br>\\n&quot;image&quot;<br>\\n]<br>\\n},<br>\\n{<br>\\n&quot;id&quot;: 2,<br>\\n&quot;type&quot;: &quot;LivePortraitCropper&quot;,<br>\\n&quot;pos&quot;: [<br>\\n630,<br>\\n1000<br>\\n],<br>\\n&quot;size&quot;: [<br>\\n340,<br>\\n340<br>\\n],<br>\\n&quot;flags&quot;: {},<br>\\n&quot;order&quot;: 5,<br>\\n&quot;mode&quot;: 0,<br>\\n&quot;inputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;pipeline&quot;,<br>\\n&quot;type&quot;: &quot;LIVEPORTRAITPIPE&quot;,<br>\\n&quot;link&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;cropper&quot;,<br>\\n&quot;type&quot;: &quot;LPCROPPER&quot;,<br>\\n&quot;link&quot;: 26,<br>\\n&quot;slot_index&quot;: 1<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;source_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;link&quot;: 10<br>\\n}<br>\\n],<br>\\n&quot;outputs&quot;: [<br>\\n{<br>\\n&quot;name&quot;: &quot;cropped_image&quot;,<br>\\n&quot;type&quot;: &quot;IMAGE&quot;,<br>\\n&quot;links&quot;: [<br>\\n13<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 0<br>\\n},<br>\\n{<br>\\n&quot;name&quot;: &quot;crop_info&quot;,<br>\\n&quot;type&quot;: &quot;CROPINFO&quot;,<br>\\n&quot;links&quot;: [<br>\\n4<br>\\n],<br>\\n&quot;shape&quot;: 3,<br>\\n&quot;slot_index&quot;: 1<br>\\n}<br>\\n],<br>\\n&quot;properties&quot;: {<br>\\n&quot;Node name for S&amp;R&quot;: &quot;LivePortraitCropper&quot;<br>\\n},<br>\\n&quot;widgets_values&quot;: [<br>\\n512,<br>\\n2.5,<br>\\n0,<br>\\n0,<br>\\n0,<br>\\n&quot;large-small&quot;,<br>\\nfalse<br>\\n]<br>\\n}<br>\\n],<br>\\n&quot;links&quot;: [<br>\\n[<br>\\n1,<br>\\n1,<br>\\n0,<br>\\n2,<br>\\n0,<br>\\n&quot;LIVEPORTRAITPIPE&quot;<br>\\n],<br>\\n[<br>\\n4,<br>\\n2,<br>\\n1,<br>\\n5,<br>\\n1,<br>\\n&quot;CROPINFO&quot;<br>\\n],<br>\\n[<br>\\n5,<br>\\n1,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n&quot;LIVEPORTRAITPIPE&quot;<br>\\n],<br>\\n[<br>\\n7,<br>\\n7,<br>\\n0,<br>\\n5,<br>\\n3,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n8,<br>\\n6,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n9,<br>\\n8,<br>\\n0,<br>\\n5,<br>\\n2,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n10,<br>\\n8,<br>\\n0,<br>\\n2,<br>\\n2,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n13,<br>\\n2,<br>\\n0,<br>\\n11,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n15,<br>\\n5,<br>\\n1,<br>\\n12,<br>\\n2,<br>\\n&quot;LP_OUT&quot;<br>\\n],<br>\\n[<br>\\n16,<br>\\n8,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n17,<br>\\n5,<br>\\n0,<br>\\n12,<br>\\n1,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n23,<br>\\n12,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n&quot;IMAGE&quot;<br>\\n],<br>\\n[<br>\\n26,<br>\\n4,<br>\\n0,<br>\\n2,<br>\\n1,<br>\\n&quot;LPCROPPER&quot;<br>\\n]<br>\\n],<br>\\n&quot;groups&quot;: [],<br>\\n&quot;config&quot;: {},<br>\\n&quot;extra&quot;: {<br>\\n&quot;ds&quot;: {<br>\\n&quot;scale&quot;: 1,<br>\\n&quot;offset&quot;: [<br>\\n92.39030360014146,<br>\\n-785.0522431015163<br>\\n]<br>\\n}<br>\\n},<br>\\n&quot;version&quot;: 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait Animals 1.0【Zho】.json","value":{"title":"LivePortrait Animals 1.0【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait Animals 1.0【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{p as comp,l as data};
