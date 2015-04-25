/*
 * yod-mock
 * https://github.com/qiu8310/yod-mock
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */




/**
 * 抓取流利说帖子里的 音频、昵称及评论
 *
 *
 * @example data
 *
 * {
     "id": "ZWI4MDcwMDAwMDZjNDUwNA==",
     "userId": "ZWI4MWQwMDAwMDYwZGZhZQ==",
     "body": "@流利菌@流利说:  ",
     "attachedImg": "",
     "userAvatar": "",
     "audioUrl": "http://cdn.llsapp.com/forum/audio/14299431722021429943035938_8k_32k.amr",
     "audioLength": 64,
     "userAnswerBadgeLevel": 0,
     "platform": 2,
     "os": "Android 4.3",
     "appVersion": "2.1",
     "userName": "玉竹公子",
     "mentionedUserId": "ZWI4MWQwMDAwMGZlZDM0Zg==",
     "createdAt": 1429943134,
     "likesCount": 0,
     "isLiked": false
 }
 */

module.exports = function(_, G) {

  // dirty work
  _.each('audio,nick,comment'.split(','), function(key) {
    if (!G[key]) { G[key] = []; }
  });

  function dirtyWork(data) {
    _.each(data.replies, function(reply) {
      if (reply.userName) {
        G.nick.push(reply.userName);
      }
      if (reply.audioUrl) {
        G.audio.push(reply.audioUrl);
      }
      if (reply.body) {
        var c = reply.body.replace(/^.*?[:]\s*/, '');
        if (c) {
          G.comment.push(c);
        }
      }
    });

    _.each('audio,nick,comment'.split(','), function(key) {
      G[key] = _.uniq(G[key]);
    });
  }

  return dirtyWork;
};
