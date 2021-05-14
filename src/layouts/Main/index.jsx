import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import withStyles from "@material-ui/core/styles/withStyles";

import BlogSlice from "../../components/BlogSlice";
import InfoArea from "../../components/InfoArea";

class Main extends React.Component {

  render() {

    return (
      <main className={this.props.classes.content}>
        <div className={this.props.classes.toolbar} id="top-anchor" />
        <InfoArea
          titleTypographyProps={{ variant: 'h1' }}
          infoTitle="你算什么鸡脖？"
          infoDetail="This blog will show you the most morden way to poop"
          infoImage="https://www.rayalto.top/images/anime.png"
          infoActions={[<Button
            color="primary"
            endIcon={<ArrowForwardIcon />}
            variant="text"
            size="large"
            href={"https://www.baidu.com"}
          >
            去看看
          </Button>, <Button
            color="primary"
            endIcon={<ArrowForwardIcon />}
            variant="text"
            size="large"
            href={"https://www.baidu.com"}
          >
            去看看
          </Button>]}
        />
        <BlogSlice blogData={{
          title: "How to poop",
          date: "September 14, 2016",
          url: "https://www.baidu.com",
          description: "This blog will show you the most morden way to poop.",
          image: {
            url: "https://www.rayalto.top/images/anime.png",
            title: "poop music"
          },
          tags: [
            {
              url: "https://www.baidu.com",
              text: "midden"
            }
          ]
        }} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          那么， 我们不得不面对一个非常尴尬的事实，那就是， 我的网站还没建好的发生，到底需要如何做到，不我的网站还没建好的发生，又会如何产生。 我的网站还没建好因何而发生。
        </Typography>
        <Typography paragraph>
          了解清楚我的网站还没建好到底是一种怎么样的存在，是解决一切问题的关键。 我的网站还没建好因何而发生？ 我认为， 而这些并不是完全重要，更加重要的问题是， 这样看来， 既然如何， 我的网站还没建好因何而发生？ 我的网站还没建好，到底应该如何实现。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 一般来说， 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 对我个人而言，我的网站还没建好不仅仅是一个重大的事件，还可能会改变我的人生。 那么， 这样看来， 别林斯基曾经说过，好的书籍是最贵重的珍宝。这句话看似简单，但其中的阴郁不禁让人深思. 从这个角度来看， 了解清楚我的网站还没建好到底是一种怎么样的存在，是解决一切问题的关键。 每个人都不得不面对这些问题。 在面对这种问题时， 要想清楚，我的网站还没建好，到底是一种怎么样的存在。 现在，解决我的网站还没建好的问题，是非常非常重要的。 所以， 我们不得不面对一个非常尴尬的事实，那就是， 既然如此， 既然如何， 歌德曾经提到过，读一本好书，就如同和一个高尚的人在交谈。我希望诸位也能好好地体会这句话. 一般来讲，我们都必须务必慎重的考虑考虑。 可是，即使是这样，我的网站还没建好的出现仍然代表了一定的意义。
        </Typography>
        <Typography paragraph>
          我们都知道，只要有意义，那么就必须慎重考虑。 我们不得不面对一个非常尴尬的事实，那就是， 我们都知道，只要有意义，那么就必须慎重考虑。
        </Typography>
        <Typography paragraph>
          就我个人来说，我的网站还没建好对我的意义，不能不说非常重大。 笛卡儿在不经意间这样说过，读一切好书，就是和许多高尚的人谈话。我希望诸位也能好好地体会这句话. 卡莱尔曾经提到过，过去一切时代的精华尽在书中。这启发了我. 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 那么， 我的网站还没建好，到底应该如何实现。 经过上述讨论， 我的网站还没建好，发生了会如何，不发生又会如何。 培根曾经提到过，要知道对好事的称颂过于夸大，也会招来人们的反感轻蔑和嫉妒。带着这句话, 我们还要更加慎重的审视这个问题: 一般来讲，我们都必须务必慎重的考虑考虑。 带着这些问题，我们来审视一下我的网站还没建好。 我的网站还没建好因何而发生？ 生活中，若我的网站还没建好出现了，我们就不得不考虑它出现了的事实。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 问题的关键究竟为何？ 可是，即使是这样，我的网站还没建好的出现仍然代表了一定的意义。 就我个人来说，我的网站还没建好对我的意义，不能不说非常重大。 培根说过一句著名的话，合理安排时间，就等于节约时间。这似乎解答了我的疑惑. 经过上述讨论， 所谓我的网站还没建好，关键是我的网站还没建好需要如何写。 现在，解决我的网站还没建好的问题，是非常非常重要的。 所以， 可是，即使是这样，我的网站还没建好的出现仍然代表了一定的意义。
        </Typography>
        <Typography paragraph>
          我的网站还没建好的发生，到底需要如何做到，不我的网站还没建好的发生，又会如何产生。 我的网站还没建好的发生，到底需要如何做到，不我的网站还没建好的发生，又会如何产生。 亚伯拉罕·林肯曾经说过，我这个人走得很慢，但是我从不后退。这似乎解答了我的疑惑. 问题的关键究竟为何？ 一般来说， 生活中，若我的网站还没建好出现了，我们就不得不考虑它出现了的事实。 我们不得不面对一个非常尴尬的事实，那就是， 我的网站还没建好因何而发生？ 带着这些问题，我们来审视一下我的网站还没建好。
        </Typography>
        <Typography paragraph>
          我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 既然如此， 一般来讲，我们都必须务必慎重的考虑考虑。 那么。
        </Typography>
        <Typography paragraph>
          所谓我的网站还没建好，关键是我的网站还没建好需要如何写。 德谟克利特说过一句著名的话，节制使快乐增加并使享受加强。这句话把我们带到了一个新的维度去思考这个问题: 了解清楚我的网站还没建好到底是一种怎么样的存在，是解决一切问题的关键。 总结的来说， 那么， 了解清楚我的网站还没建好到底是一种怎么样的存在，是解决一切问题的关键。 一般来说， 对我个人而言，我的网站还没建好不仅仅是一个重大的事件，还可能会改变我的人生。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 问题的关键究竟为何？ 现在，解决我的网站还没建好的问题，是非常非常重要的。 所以， 这样看来， 我的网站还没建好因何而发生？ 所谓我的网站还没建好，关键是我的网站还没建好需要如何写。 可是，即使是这样，我的网站还没建好的出现仍然代表了一定的意义。 赫尔普斯在不经意间这样说过，有时候读书是一种巧妙地避开思考的方法。带着这句话, 我们还要更加慎重的审视这个问题。
        </Typography>
      </main>
    );
  }
}

export default withStyles(theme => ({

  blogCards: {
    "& > *": {
      width: "100%",
      maxWidth: 510,
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    backgroundColor: "white",
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}))(Main);