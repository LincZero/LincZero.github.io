import{_ as r,e,h as b,r as t,o as a}from"./app-BPsvr-nk.js";const o={};function i(s,p){const n=t("VueFlow");return a(),e("div",null,[b(n,{type:"nodeflow-comfyui",data:`{
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
`})])}const m=r(o,[["render",i],["__file","LivePortrait Animals 1.0【Zho】.json.html.vue"]]),d=JSON.parse('{"path":"/MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait%20Animals%201.0%E3%80%90Zho%E3%80%91.json.html","title":"LivePortrait Animals 1.0【Zho】.json","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 38, \\"last_link_id\\": 54, \\"nodes\\": [ { \\"id\\": 4, \\"type\\": \\"LivePortraitLoadFaceAlignmentCropper\\", \\"pos\\": [ 100, 1130 ], \\"size\\": { \\"0\\": 510, \\"1\\": 210 }, \\"flags\\": {}...","head":[["meta",{"property":"og:url","content":"https://LincZero.github.io/MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait%20Animals%201.0%E3%80%90Zho%E3%80%91.json.html"}],["meta",{"property":"og:site_name","content":"Linc 的小站"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 38, \\"last_link_id\\": 54, \\"nodes\\": [ { \\"id\\": 4, \\"type\\": \\"LivePortraitLoadFaceAlignmentCropper\\", \\"pos\\": [ 100, 1130 ], \\"size\\": { \\"0\\": 510, \\"1\\": 210 }, \\"flags\\": {}..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincZero\\",\\"url\\":\\"https://github.com/LincZero/\\"}]}"]],"layout":"Layout"},"git":{},"readingTime":{"minutes":2.52,"words":755},"filePathRelative":"MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait Animals 1.0【Zho】.json","excerpt":"<p>{<br>\\n\\"last_node_id\\": 38,<br>\\n\\"last_link_id\\": 54,<br>\\n\\"nodes\\": [<br>\\n{<br>\\n\\"id\\": 4,<br>\\n\\"type\\": \\"LivePortraitLoadFaceAlignmentCropper\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n1130<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 510,<br>\\n\\"1\\": 210<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 0,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"cropper\\",<br>\\n\\"type\\": \\"LPCROPPER\\",<br>\\n\\"links\\": [<br>\\n26<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LivePortraitLoadFaceAlignmentCropper\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"blazeface\\",<br>\\n\\"torch_gpu\\",<br>\\n\\"cuda\\",<br>\\n\\"fp16\\",<br>\\ntrue<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 1,<br>\\n\\"type\\": \\"DownloadAndLoadLivePortraitModels\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n1000<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 510,<br>\\n\\"1\\": 82<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 1,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"live_portrait_pipe\\",<br>\\n\\"type\\": \\"LIVEPORTRAITPIPE\\",<br>\\n\\"links\\": [<br>\\n1,<br>\\n5<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"DownloadAndLoadLivePortraitModels\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"auto\\",<br>\\n\\"animal\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 17,<br>\\n\\"type\\": \\"VHS_VideoCombine\\",<br>\\n\\"pos\\": [<br>\\n1180,<br>\\n1390<br>\\n],<br>\\n\\"size\\": [<br>\\n490,<br>\\n794<br>\\n],<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": false<br>\\n},<br>\\n\\"order\\": 9,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 23,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"audio\\",<br>\\n\\"type\\": \\"AUDIO\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"meta_batch\\",<br>\\n\\"type\\": \\"VHS_BatchManager\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"Filenames\\",<br>\\n\\"type\\": \\"VHS_FILENAMES\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VHS_VideoCombine\\"<br>\\n},<br>\\n\\"widgets_values\\": {<br>\\n\\"frame_rate\\": 30,<br>\\n\\"loop_count\\": 0,<br>\\n\\"filename_prefix\\": \\"LP AM\\",<br>\\n\\"format\\": \\"video/h264-mp4\\",<br>\\n\\"pix_fmt\\": \\"yuv420p\\",<br>\\n\\"crf\\": 19,<br>\\n\\"save_metadata\\": true,<br>\\n\\"pingpong\\": false,<br>\\n\\"save_output\\": true,<br>\\n\\"videopreview\\": {<br>\\n\\"hidden\\": false,<br>\\n\\"paused\\": false,<br>\\n\\"params\\": {<br>\\n\\"filename\\": \\"LP AM_00020.mp4\\",<br>\\n\\"subfolder\\": \\"\\",<br>\\n\\"type\\": \\"output\\",<br>\\n\\"format\\": \\"video/h264-mp4\\",<br>\\n\\"frame_rate\\": 30<br>\\n}<br>\\n}<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 5,<br>\\n\\"type\\": \\"LivePortraitProcess\\",<br>\\n\\"pos\\": [<br>\\n990,<br>\\n1000<br>\\n],<br>\\n\\"size\\": [<br>\\n330,<br>\\n340<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 7,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"pipeline\\",<br>\\n\\"type\\": \\"LIVEPORTRAITPIPE\\",<br>\\n\\"link\\": 5,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"crop_info\\",<br>\\n\\"type\\": \\"CROPINFO\\",<br>\\n\\"link\\": 4<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"source_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 9,<br>\\n\\"slot_index\\": 2<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"driving_images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 7<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"opt_retargeting_info\\",<br>\\n\\"type\\": \\"RETARGETINGINFO\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"cropped_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n17<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"output\\",<br>\\n\\"type\\": \\"LP_OUT\\",<br>\\n\\"links\\": [<br>\\n15<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LivePortraitProcess\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\nfalse,<br>\\n0.03,<br>\\ntrue,<br>\\n1,<br>\\n\\"constant\\",<br>\\n\\"relative\\",<br>\\n0.000003,<br>\\nfalse,<br>\\n1<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 12,<br>\\n\\"type\\": \\"LivePortraitComposite\\",<br>\\n\\"pos\\": [<br>\\n1340,<br>\\n1000<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 240,<br>\\n\\"1\\": 90<br>\\n},<br>\\n\\"flags\\": {<br>\\n\\"collapsed\\": true<br>\\n},<br>\\n\\"order\\": 8,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"source_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 16,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cropped_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 17<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"liveportrait_out\\",<br>\\n\\"type\\": \\"LP_OUT\\",<br>\\n\\"link\\": 15<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"full_images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n23<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"mask\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LivePortraitComposite\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 11,<br>\\n\\"type\\": \\"PreviewImage\\",<br>\\n\\"pos\\": [<br>\\n1340,<br>\\n1050<br>\\n],<br>\\n\\"size\\": [<br>\\n330,<br>\\n290<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 6,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"images\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 13<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"PreviewImage\\"<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 8,<br>\\n\\"type\\": \\"ImageScale\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n1390<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 510,<br>\\n\\"1\\": 150<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 4,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 8<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n9,<br>\\n10,<br>\\n16<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"ImageScale\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"nearest-exact\\",<br>\\n512,<br>\\n512,<br>\\n\\"center\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 7,<br>\\n\\"type\\": \\"VHS_LoadVideo\\",<br>\\n\\"pos\\": [<br>\\n630,<br>\\n1390<br>\\n],<br>\\n\\"size\\": [<br>\\n530,<br>\\n790<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 2,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"meta_batch\\",<br>\\n\\"type\\": \\"VHS_BatchManager\\",<br>\\n\\"link\\": null<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"vae\\",<br>\\n\\"type\\": \\"VAE\\",<br>\\n\\"link\\": null<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n7<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"frame_count\\",<br>\\n\\"type\\": \\"INT\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"audio\\",<br>\\n\\"type\\": \\"AUDIO\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"video_info\\",<br>\\n\\"type\\": \\"VHS_VIDEOINFO\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"VHS_LoadVideo\\"<br>\\n},<br>\\n\\"widgets_values\\": {<br>\\n\\"video\\": \\"d6.mp4\\",<br>\\n\\"force_rate\\": 0,<br>\\n\\"force_size\\": \\"Disabled\\",<br>\\n\\"custom_width\\": 512,<br>\\n\\"custom_height\\": 512,<br>\\n\\"frame_load_cap\\": 120,<br>\\n\\"skip_first_frames\\": 0,<br>\\n\\"select_every_nth\\": 1,<br>\\n\\"choose video to upload\\": \\"image\\",<br>\\n\\"videopreview\\": {<br>\\n\\"hidden\\": false,<br>\\n\\"paused\\": false,<br>\\n\\"params\\": {<br>\\n\\"frame_load_cap\\": 120,<br>\\n\\"skip_first_frames\\": 0,<br>\\n\\"force_rate\\": 0,<br>\\n\\"select_every_nth\\": 1,<br>\\n\\"filename\\": \\"d6.mp4\\",<br>\\n\\"type\\": \\"input\\",<br>\\n\\"format\\": \\"video/mp4\\"<br>\\n}<br>\\n}<br>\\n}<br>\\n},<br>\\n{<br>\\n\\"id\\": 6,<br>\\n\\"type\\": \\"LoadImage\\",<br>\\n\\"pos\\": [<br>\\n100,<br>\\n1590<br>\\n],<br>\\n\\"size\\": {<br>\\n\\"0\\": 510,<br>\\n\\"1\\": 590<br>\\n},<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 3,<br>\\n\\"mode\\": 0,<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"IMAGE\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n8<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"MASK\\",<br>\\n\\"type\\": \\"MASK\\",<br>\\n\\"links\\": null,<br>\\n\\"shape\\": 3<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n\\"u=1088737114,3070841736&amp;fm=253&amp;fmt=auto&amp;app=120&amp;f=JPEG.webp\\",<br>\\n\\"image\\"<br>\\n]<br>\\n},<br>\\n{<br>\\n\\"id\\": 2,<br>\\n\\"type\\": \\"LivePortraitCropper\\",<br>\\n\\"pos\\": [<br>\\n630,<br>\\n1000<br>\\n],<br>\\n\\"size\\": [<br>\\n340,<br>\\n340<br>\\n],<br>\\n\\"flags\\": {},<br>\\n\\"order\\": 5,<br>\\n\\"mode\\": 0,<br>\\n\\"inputs\\": [<br>\\n{<br>\\n\\"name\\": \\"pipeline\\",<br>\\n\\"type\\": \\"LIVEPORTRAITPIPE\\",<br>\\n\\"link\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"cropper\\",<br>\\n\\"type\\": \\"LPCROPPER\\",<br>\\n\\"link\\": 26,<br>\\n\\"slot_index\\": 1<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"source_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"link\\": 10<br>\\n}<br>\\n],<br>\\n\\"outputs\\": [<br>\\n{<br>\\n\\"name\\": \\"cropped_image\\",<br>\\n\\"type\\": \\"IMAGE\\",<br>\\n\\"links\\": [<br>\\n13<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 0<br>\\n},<br>\\n{<br>\\n\\"name\\": \\"crop_info\\",<br>\\n\\"type\\": \\"CROPINFO\\",<br>\\n\\"links\\": [<br>\\n4<br>\\n],<br>\\n\\"shape\\": 3,<br>\\n\\"slot_index\\": 1<br>\\n}<br>\\n],<br>\\n\\"properties\\": {<br>\\n\\"Node name for S&amp;R\\": \\"LivePortraitCropper\\"<br>\\n},<br>\\n\\"widgets_values\\": [<br>\\n512,<br>\\n2.5,<br>\\n0,<br>\\n0,<br>\\n0,<br>\\n\\"large-small\\",<br>\\nfalse<br>\\n]<br>\\n}<br>\\n],<br>\\n\\"links\\": [<br>\\n[<br>\\n1,<br>\\n1,<br>\\n0,<br>\\n2,<br>\\n0,<br>\\n\\"LIVEPORTRAITPIPE\\"<br>\\n],<br>\\n[<br>\\n4,<br>\\n2,<br>\\n1,<br>\\n5,<br>\\n1,<br>\\n\\"CROPINFO\\"<br>\\n],<br>\\n[<br>\\n5,<br>\\n1,<br>\\n0,<br>\\n5,<br>\\n0,<br>\\n\\"LIVEPORTRAITPIPE\\"<br>\\n],<br>\\n[<br>\\n7,<br>\\n7,<br>\\n0,<br>\\n5,<br>\\n3,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n8,<br>\\n6,<br>\\n0,<br>\\n8,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n9,<br>\\n8,<br>\\n0,<br>\\n5,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n10,<br>\\n8,<br>\\n0,<br>\\n2,<br>\\n2,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n13,<br>\\n2,<br>\\n0,<br>\\n11,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n15,<br>\\n5,<br>\\n1,<br>\\n12,<br>\\n2,<br>\\n\\"LP_OUT\\"<br>\\n],<br>\\n[<br>\\n16,<br>\\n8,<br>\\n0,<br>\\n12,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n17,<br>\\n5,<br>\\n0,<br>\\n12,<br>\\n1,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n23,<br>\\n12,<br>\\n0,<br>\\n17,<br>\\n0,<br>\\n\\"IMAGE\\"<br>\\n],<br>\\n[<br>\\n26,<br>\\n4,<br>\\n0,<br>\\n2,<br>\\n1,<br>\\n\\"LPCROPPER\\"<br>\\n]<br>\\n],<br>\\n\\"groups\\": [],<br>\\n\\"config\\": {},<br>\\n\\"extra\\": {<br>\\n\\"ds\\": {<br>\\n\\"scale\\": 1,<br>\\n\\"offset\\": [<br>\\n92.39030360014146,<br>\\n-785.0522431015163<br>\\n]<br>\\n}<br>\\n},<br>\\n\\"version\\": 0.4<br>\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait Animals 1.0【Zho】.json","value":{"title":"LivePortrait Animals 1.0【Zho】.json","path":"MdNote_Other/ComfyUI-Workflows-ZHO/LivePortrait Animals 1.0【Zho】.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{m as comp,d as data};
