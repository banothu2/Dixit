  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>socket.io-client/socket.io-client.js at master · LearnBoost/socket.io-client</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets">
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="UIVNSwVD1RqhR8//wyp87gLYfAJ6F9wQ3BeJAivF5to=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-202e33a586eb990be0ca930957d0d26c9d440e4b.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-54d5f0f93e4b5fa56548ac41e306faf4eec18a6c.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-79f2823dcb759d8be14a47cc3866f523e4e21124.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="6783c79a73bd54c60e70db0ff2be87db">

        <link data-pjax-transient rel='permalink' href='/LearnBoost/socket.io-client/blob/80043466592156e44f378cf17e1cdcaa8627a0b7/socket.io-client.js'>
    <meta property="og:title" content="socket.io-client"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/LearnBoost/socket.io-client"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/07100ee5e8dedd7c96195b2aa422dbb5?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="socket.io-client - Sockets for the rest of us"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="LearnBoost/socket.io-client"/>

    <meta name="description" content="socket.io-client - Sockets for the rest of us" />

  <link href="https://github.com/LearnBoost/socket.io-client/commits/master.atom" rel="alternate" title="Recent Commits to socket.io-client:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-icon mega-icon-invertocat"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  ">
            <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="firstprayer" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="cmdform">

    <input type="hidden" class="js-repository-name-with-owner" value="LearnBoost/socket.io-client"/>
    <input type="hidden" class="js-repository-branch" value="master"/>
    <input type="hidden" class="js-repository-tree-sha" value="45f308ef82cc6797e221833e10c27a415a6029b5"/>

  <div class="divider-vertical"></div>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="https://github.com/firstprayer" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/9ab8a11f2252b1423f98d125eaab70d9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> firstprayer
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="mini-icon mini-icon-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="mini-icon mini-icon-account-settings"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="mini-icon mini-icon-create"></span> New repository</a>
    </li>
    <li>
        <a href="https://github.com/LearnBoost/socket.io-client/issues/new"><span class="mini-icon mini-icon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="mini-icon mini-icon-u-list"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="UIVNSwVD1RqhR8//wyp87gLYfAJ6F9wQ3BeJAivF5to=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="557977" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/LearnBoost/socket.io-client/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/LearnBoost/socket.io-client/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/LearnBoost/socket.io-client/stargazers">1,907</a>
    </li>

        <li>
          <a href="/LearnBoost/socket.io-client/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/LearnBoost/socket.io-client/network" class="social-count">422</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/LearnBoost" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">LearnBoost</span>
                  </a></span> /
                <strong><a href="/LearnBoost/socket.io-client" class="js-current-repository">socket.io-client</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
      <li class="pulse-nav"><a href="/LearnBoost/socket.io-client/pulse" highlight="pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/LearnBoost/socket.io-client" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/LearnBoost/socket.io-client/network" highlight="repo_network">Network</a></li>
    <li><a href="/LearnBoost/socket.io-client/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>62</span></a></li>

      <li><a href="/LearnBoost/socket.io-client/issues" highlight="repo_issues">Issues <span class='counter'>191</span></a></li>

      <li><a href="/LearnBoost/socket.io-client/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/LearnBoost/socket.io-client/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/LearnBoost/socket.io-client/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">52</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9" rel="nofollow" title="0.9">0.9</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/1.0/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0" rel="nofollow" title="1.0">1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/06/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="06" rel="nofollow" title="06">06</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/develop/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="develop" rel="nofollow" title="develop">develop</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/master/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/webworker/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="webworker" rel="nofollow" title="webworker">webworker</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.11/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.11" rel="nofollow" title="0.9.11">0.9.11</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.10/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.10" rel="nofollow" title="0.9.10">0.9.10</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.9/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.9" rel="nofollow" title="0.9.9">0.9.9</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.8/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.8" rel="nofollow" title="0.9.8">0.9.8</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.7/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.7" rel="nofollow" title="0.9.7">0.9.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.6/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.6" rel="nofollow" title="0.9.6">0.9.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.5/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.5" rel="nofollow" title="0.9.5">0.9.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.4/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.4" rel="nofollow" title="0.9.4">0.9.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.3/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.3" rel="nofollow" title="0.9.3">0.9.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.2/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.2" rel="nofollow" title="0.9.2">0.9.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.1-1/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.1-1" rel="nofollow" title="0.9.1-1">0.9.1-1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.1/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.1" rel="nofollow" title="0.9.1">0.9.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.9.0/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.9.0" rel="nofollow" title="0.9.0">0.9.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.8.7/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.8.7" rel="nofollow" title="0.8.7">0.8.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.8.6/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.8.6" rel="nofollow" title="0.8.6">0.8.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.8.5/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.8.5" rel="nofollow" title="0.8.5">0.8.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.8.4/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.8.4" rel="nofollow" title="0.8.4">0.8.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.8.3/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.8.3" rel="nofollow" title="0.8.3">0.8.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.8.2/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.8.2" rel="nofollow" title="0.8.2">0.8.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.8.1/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.8.1" rel="nofollow" title="0.8.1">0.8.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.8.0/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.8.0" rel="nofollow" title="0.8.0">0.8.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.7.11/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.7.11" rel="nofollow" title="0.7.11">0.7.11</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.7.10/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.7.10" rel="nofollow" title="0.7.10">0.7.10</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.7.9/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.7.9" rel="nofollow" title="0.7.9">0.7.9</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.7.5/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.7.5" rel="nofollow" title="0.7.5">0.7.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.7.4/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.7.4" rel="nofollow" title="0.7.4">0.7.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.7.3/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.7.3" rel="nofollow" title="0.7.3">0.7.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.7.2/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.7.2" rel="nofollow" title="0.7.2">0.7.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.7.1/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.7.1" rel="nofollow" title="0.7.1">0.7.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.7.0/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.7.0" rel="nofollow" title="0.7.0">0.7.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.6.3/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.6.3" rel="nofollow" title="0.6.3">0.6.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.6.2/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.6.2" rel="nofollow" title="0.6.2">0.6.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.6.1/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.6.1" rel="nofollow" title="0.6.1">0.6.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.6/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.6" rel="nofollow" title="0.6">0.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.5.3/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.3" rel="nofollow" title="0.5.3">0.5.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.5.2/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.2" rel="nofollow" title="0.5.2">0.5.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.5.1/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5.1" rel="nofollow" title="0.5.1">0.5.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.5/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.5" rel="nofollow" title="0.5">0.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.2.4/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.2.4" rel="nofollow" title="0.2.4">0.2.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.2.3/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.2.3" rel="nofollow" title="0.2.3">0.2.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.2.2/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.2.2" rel="nofollow" title="0.2.2">0.2.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.2.1/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.2.1" rel="nofollow" title="0.2.1">0.2.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.2.0/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.2.0" rel="nofollow" title="0.2.0">0.2.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.1.8/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.8" rel="nofollow" title="0.1.8">0.1.8</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.1.7/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.7" rel="nofollow" title="0.1.7">0.1.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.1.6/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.6" rel="nofollow" title="0.1.6">0.1.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.1.5/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.5" rel="nofollow" title="0.1.5">0.1.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.1.4/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.4" rel="nofollow" title="0.1.4">0.1.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.1.3/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.3" rel="nofollow" title="0.1.3">0.1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.1.2/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.2" rel="nofollow" title="0.1.2">0.1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.1.1/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.1" rel="nofollow" title="0.1.1">0.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/LearnBoost/socket.io-client/blob/0.1/socket.io-client.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1" rel="nofollow" title="0.1">0.1</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/LearnBoost/socket.io-client" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/LearnBoost/socket.io-client/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/LearnBoost/socket.io-client/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">6</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:73e5ebec3d546f20914a653f220898ef -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:73e5ebec3d546f20914a653f220898ef -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/LearnBoost/socket.io-client" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">socket.io-client</span></a></span></span><span class="separator"> / </span><strong class="final-path">socket.io-client.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="socket.io-client.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/LearnBoost/socket.io-client/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/486e20e16ef676a02ac0299d2f92b813?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/guille" rel="author">guille</a></span>
    <time class="js-relative-date" datetime="2012-12-17T03:43:33-08:00" title="2012-12-17 03:43:33">December 17, 2012</time>
    <div class="commit-title">
        <a href="/LearnBoost/socket.io-client/commit/337e9a285ec58d1fa9aa52e0964ab79d7c3b0958" class="message">build</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/486e20e16ef676a02ac0299d2f92b813?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/guille">guille</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/LearnBoost/socket.io-client/blob/80043466592156e44f378cf17e1cdcaa8627a0b7/socket.io-client.js" data-title="socket.io-client/socket.io-client.js at master · LearnBoost/socket.io-client · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>2 lines (2 sloc)</span>
                <span>49.124 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/LearnBoost/socket.io-client/edit/master/socket.io-client.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/LearnBoost/socket.io-client/raw/master/socket.io-client.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/LearnBoost/socket.io-client/blame/master/socket.io-client.js" class="button minibutton ">Blame</a>
                  <a href="/LearnBoost/socket.io-client/commits/master/socket.io-client.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-blob">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>

          </td>
          <td class="blob-line-code">
                <div class='line' id='LC1'>(function(){function require(p,parent,orig){var path=require.resolve(p),mod=require.modules[path];if(null==path){orig=orig||p;parent=parent||&quot;root&quot;;throw new Error(&#39;failed to require &quot;&#39;+orig+&#39;&quot; from &quot;&#39;+parent+&#39;&quot;&#39;)}if(!mod.exports){mod.exports={};mod.client=mod.component=true;mod.call(this,mod,mod.exports,require.relative(path))}return mod.exports}require.modules={};require.aliases={};require.resolve=function(path){var orig=path,reg=path+&quot;.js&quot;,regJSON=path+&quot;.json&quot;,index=path+&quot;/index.js&quot;,indexJSON=path+&quot;/index.json&quot;;return require.modules[reg]&amp;&amp;reg||require.modules[regJSON]&amp;&amp;regJSON||require.modules[index]&amp;&amp;index||require.modules[indexJSON]&amp;&amp;indexJSON||require.modules[orig]&amp;&amp;orig||require.aliases[index]};require.normalize=function(curr,path){var segs=[];if(&quot;.&quot;!=path.charAt(0))return path;curr=curr.split(&quot;/&quot;);path=path.split(&quot;/&quot;);for(var i=0;i&lt;path.length;++i){if(&quot;..&quot;==path[i]){curr.pop()}else if(&quot;.&quot;!=path[i]&amp;&amp;&quot;&quot;!=path[i]){segs.push(path[i])}}return curr.concat(segs).join(&quot;/&quot;)};require.register=function(path,fn){require.modules[path]=fn};require.alias=function(from,to){var fn=require.modules[from];if(!fn)throw new Error(&#39;failed to alias &quot;&#39;+from+&#39;&quot;, it does not exist&#39;);require.aliases[to]=from};require.relative=function(parent){var p=require.normalize(parent,&quot;..&quot;);function lastIndexOf(arr,obj){var i=arr.length;while(i--){if(arr[i]===obj)return i}return-1}function fn(path){var orig=path;path=fn.resolve(path);return require(path,parent,orig)}fn.resolve=function(path){if(&quot;.&quot;!=path.charAt(0)){var segs=parent.split(&quot;/&quot;);var i=lastIndexOf(segs,&quot;deps&quot;)+1;if(!i)i=0;path=segs.slice(0,i+1).join(&quot;/&quot;)+&quot;/deps/&quot;+path;return path}return require.normalize(p,path)};fn.exists=function(path){return!!require.modules[fn.resolve(path)]};return fn};require.register(&quot;learnboost-engine.io-client/lib/index.js&quot;,function(module,exports,require){module.exports=require(&quot;./socket&quot;)});require.register(&quot;learnboost-engine.io-client/lib/parser.js&quot;,function(module,exports,require){var util=require(&quot;./util&quot;);var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=util.keys(packets);var err={type:&quot;error&quot;,data:&quot;parser error&quot;};exports.encodePacket=function(packet){var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=String(packet.data)}return&quot;&quot;+encoded};exports.decodePacket=function(data){var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err}if(data.length&gt;1){return{type:packetslist[type],data:data.substring(1)}}else{return{type:packetslist[type]}}};exports.encodePayload=function(packets){if(!packets.length){return&quot;0:&quot;}var encoded=&quot;&quot;,message;for(var i=0,l=packets.length;i&lt;l;i++){message=exports.encodePacket(packets[i]);encoded+=message.length+&quot;:&quot;+message}return encoded};exports.decodePayload=function(data){if(data==&quot;&quot;){return[err]}var packets=[],length=&quot;&quot;,n,msg,packet;for(var i=0,l=data.length;i&lt;l;i++){var chr=data.charAt(i);if(&quot;:&quot;!=chr){length+=chr}else{if(&quot;&quot;==length||length!=(n=Number(length))){return[err]}msg=data.substr(i+1,n);if(length!=msg.length){return[err]}if(msg.length){packet=exports.decodePacket(msg);if(err.type==packet.type&amp;&amp;err.data==packet.data){return[err]}packets.push(packet)}i+=n;length=&quot;&quot;}}if(length!=&quot;&quot;){return[err]}return packets}});require.register(&quot;learnboost-engine.io-client/lib/socket.js&quot;,function(module,exports,require){var util=require(&quot;./util&quot;),transports=require(&quot;./transports&quot;),Emitter=require(&quot;./emitter&quot;),debug=require(&quot;debug&quot;)(&quot;engine-client:socket&quot;);module.exports=Socket;var global=&quot;undefined&quot;!=typeof window?window:global;function Socket(opts){if(!(this instanceof Socket))return new Socket(opts);if(&quot;string&quot;==typeof opts){var uri=util.parseUri(opts);opts=arguments[1]||{};opts.host=uri.host;opts.secure=uri.protocol==&quot;https&quot;||uri.protocol==&quot;wss&quot;;opts.port=uri.port}opts=opts||{};this.secure=null!=opts.secure?opts.secure:global.location&amp;&amp;&quot;https:&quot;==location.protocol;this.host=opts.host||opts.hostname||(global.location?location.hostname:&quot;localhost&quot;);this.port=opts.port||(global.location&amp;&amp;location.port?location.port:this.secure?443:80);this.query=opts.query||{};this.query.uid=rnd();this.upgrade=false!==opts.upgrade;this.resource=opts.resource||&quot;default&quot;;this.path=(opts.path||&quot;/engine.io&quot;).replace(/\/$/,&quot;&quot;);this.path+=&quot;/&quot;+this.resource+&quot;/&quot;;this.forceJSONP=!!opts.forceJSONP;this.timestampParam=opts.timestampParam||&quot;t&quot;;this.timestampRequests=!!opts.timestampRequests;this.flashPath=opts.flashPath||&quot;&quot;;this.transports=opts.transports||[&quot;polling&quot;,&quot;websocket&quot;,&quot;flashsocket&quot;];this.readyState=&quot;&quot;;this.writeBuffer=[];this.policyPort=opts.policyPort||843;this.open();Socket.sockets.push(this);Socket.sockets.evs.emit(&quot;add&quot;,this)}Emitter(Socket.prototype);Socket.protocol=1;Socket.sockets=[];Socket.sockets.evs=new Emitter;Socket.Socket=Socket;Socket.Transport=require(&quot;./transport&quot;);Socket.Emitter=require(&quot;./emitter&quot;);Socket.transports=require(&quot;./transports&quot;);Socket.util=require(&quot;./util&quot;);Socket.parser=require(&quot;./parser&quot;);Socket.prototype.createTransport=function(name){debug(&#39;creating transport &quot;%s&quot;&#39;,name);var query=clone(this.query);query.transport=name;if(this.id){query.sid=this.id}var transport=new transports[name]({host:this.host,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,flashPath:this.flashPath,policyPort:this.policyPort});return transport};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i]}}return o}Socket.prototype.open=function(){this.readyState=&quot;opening&quot;;var transport=this.createTransport(this.transports[0]);transport.open();this.setTransport(transport)};Socket.prototype.setTransport=function(transport){var self=this;if(this.transport){debug(&quot;clearing existing transport&quot;);this.transport.removeAllListeners()}this.transport=transport;transport.on(&quot;drain&quot;,function(){self.flush()}).on(&quot;packet&quot;,function(packet){self.onPacket(packet)}).on(&quot;error&quot;,function(e){self.onError(e)}).on(&quot;close&quot;,function(){self.onClose(&quot;transport close&quot;)})};Socket.prototype.probe=function(name){debug(&#39;probing transport &quot;%s&quot;&#39;,name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;transport.once(&quot;open&quot;,function(){if(failed)return;debug(&#39;probe transport &quot;%s&quot; opened&#39;,name);transport.send([{type:&quot;ping&quot;,data:&quot;probe&quot;}]);transport.once(&quot;packet&quot;,function(msg){if(failed)return;if(&quot;pong&quot;==msg.type&amp;&amp;&quot;probe&quot;==msg.data){debug(&#39;probe transport &quot;%s&quot; pong&#39;,name);self.upgrading=true;self.emit(&quot;upgrading&quot;,transport);debug(&#39;pausing current transport &quot;%s&quot;&#39;,self.transport.name);self.transport.pause(function(){if(failed)return;if(&quot;closed&quot;==self.readyState||&quot;closing&quot;==self.readyState){return}debug(&quot;changing transport and sending upgrade packet&quot;);transport.removeListener(&quot;error&quot;,onerror);self.emit(&quot;upgrade&quot;,transport);self.setTransport(transport);transport.send([{type:&quot;upgrade&quot;}]);transport=null;self.upgrading=false;self.flush()})}else{debug(&#39;probe transport &quot;%s&quot; failed&#39;,name);var err=new Error(&quot;probe error&quot;);err.transport=transport.name;self.emit(&quot;error&quot;,err)}})});transport.once(&quot;error&quot;,onerror);function onerror(err){if(failed)return;failed=true;var error=new Error(&quot;probe error: &quot;+err);error.transport=transport.name;transport.close();transport=null;debug(&#39;probe transport &quot;%s&quot; failed because of error: %s&#39;,name,err);self.emit(&quot;error&quot;,error)}transport.open();this.once(&quot;close&quot;,function(){if(transport){debug(&quot;socket closed prematurely - aborting probe&quot;);failed=true;transport.close();transport=null}});this.once(&quot;upgrading&quot;,function(to){if(transport&amp;&amp;to.name!=transport.name){debug(&#39;&quot;%s&quot; works - aborting &quot;%s&quot;&#39;,to.name,transport.name);transport.close();transport=null}})};Socket.prototype.onOpen=function(){debug(&quot;socket open&quot;);this.readyState=&quot;open&quot;;this.emit(&quot;open&quot;);this.onopen&amp;&amp;this.onopen.call(this);this.flush();if(&quot;open&quot;==this.readyState&amp;&amp;this.upgrade&amp;&amp;this.transport.pause){debug(&quot;starting upgrade probes&quot;);for(var i=0,l=this.upgrades.length;i&lt;l;i++){this.probe(this.upgrades[i])}}};Socket.prototype.onPacket=function(packet){if(&quot;opening&quot;==this.readyState||&quot;open&quot;==this.readyState){debug(&#39;socket receive: type &quot;%s&quot;, data &quot;%s&quot;&#39;,packet.type,packet.data);this.emit(&quot;packet&quot;,packet);this.emit(&quot;heartbeat&quot;);switch(packet.type){case&quot;open&quot;:this.onHandshake(util.parseJSON(packet.data));break;case&quot;pong&quot;:this.ping();break;case&quot;error&quot;:var err=new Error(&quot;server error&quot;);err.code=packet.data;this.emit(&quot;error&quot;,err);break;case&quot;message&quot;:this.emit(&quot;message&quot;,packet.data);var event={data:packet.data};event.toString=function(){return packet.data};this.onmessage&amp;&amp;this.onmessage.call(this,event);break}}else{debug(&#39;packet received with socket readyState &quot;%s&quot;&#39;,this.readyState)}};Socket.prototype.onHandshake=function(data){this.emit(&quot;handshake&quot;,data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=data.upgrades;this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();this.ping();this.removeListener(&quot;heartbeat&quot;,this.onHeartbeat);this.on(&quot;heartbeat&quot;,this.onHeartbeat)};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if(&quot;closed&quot;==self.readyState)return;self.onClose(&quot;ping timeout&quot;)},timeout||self.pingInterval+self.pingTimeout)};Socket.prototype.ping=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug(&quot;writing ping packet - expecting pong within %sms&quot;,self.pingTimeout);self.sendPacket(&quot;ping&quot;);self.onHeartbeat(self.pingTimeout)},self.pingInterval)};Socket.prototype.flush=function(){if(&quot;closed&quot;!=this.readyState&amp;&amp;this.transport.writable&amp;&amp;!this.upgrading&amp;&amp;this.writeBuffer.length){debug(&quot;flushing %d packets in socket&quot;,this.writeBuffer.length);this.transport.send(this.writeBuffer);this.writeBuffer=[]}};Socket.prototype.write=Socket.prototype.send=function(msg){this.sendPacket(&quot;message&quot;,msg);return this};Socket.prototype.sendPacket=function(type,data){var packet={type:type,data:data};this.emit(&quot;packetCreate&quot;,packet);this.writeBuffer.push(packet);this.flush()};Socket.prototype.close=function(){if(&quot;opening&quot;==this.readyState||&quot;open&quot;==this.readyState){this.onClose(&quot;forced close&quot;);debug(&quot;socket closing - telling transport to close&quot;);this.transport.close();this.transport.removeAllListeners()}return this};Socket.prototype.onError=function(err){this.emit(&quot;error&quot;,err);this.onClose(&quot;transport error&quot;,err)};Socket.prototype.onClose=function(reason,desc){if(&quot;closed&quot;!=this.readyState){debug(&#39;socket close with reason: &quot;%s&quot;&#39;,reason);clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);this.readyState=&quot;closed&quot;;this.emit(&quot;close&quot;,reason,desc);this.onclose&amp;&amp;this.onclose.call(this);this.id=null}};function rnd(){return String(Math.random()).substr(5)+String(Math.random()).substr(5)}});require.register(&quot;learnboost-engine.io-client/lib/transport.js&quot;,function(module,exports,require){var util=require(&quot;./util&quot;),parser=require(&quot;./parser&quot;),Emitter=require(&quot;./emitter&quot;);module.exports=Transport;function Transport(opts){this.path=opts.path;this.host=opts.host;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState=&quot;&quot;}Emitter(Transport.prototype);Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type=&quot;TransportError&quot;;err.description=desc;this.emit(&quot;error&quot;,err);return this};Transport.prototype.open=function(){if(&quot;closed&quot;==this.readyState||&quot;&quot;==this.readyState){this.readyState=&quot;opening&quot;;this.doOpen()}return this};Transport.prototype.close=function(){if(&quot;opening&quot;==this.readyState||&quot;open&quot;==this.readyState){this.doClose();this.onClose()}return this};Transport.prototype.send=function(packets){if(&quot;open&quot;==this.readyState){this.write(packets)}else{throw new Error(&quot;Transport not open&quot;)}};Transport.prototype.onOpen=function(){this.readyState=&quot;open&quot;;this.writable=true;this.emit(&quot;open&quot;)};Transport.prototype.onData=function(data){this.onPacket(parser.decodePacket(data))};Transport.prototype.onPacket=function(packet){this.emit(&quot;packet&quot;,packet)};Transport.prototype.onClose=function(){this.readyState=&quot;closed&quot;;this.emit(&quot;close&quot;)}});require.register(&quot;learnboost-engine.io-client/lib/emitter.js&quot;,function(module,exports,require){var Emitter;try{Emitter=require(&quot;emitter&quot;)}catch(e){Emitter=require(&quot;emitter-component&quot;)}module.exports=Emitter;Emitter.prototype.addEventListener=Emitter.prototype.on;Emitter.prototype.removeEventListener=Emitter.prototype.off;Emitter.prototype.removeListener=Emitter.prototype.off;Emitter.prototype.removeAllListeners=function(){this._callbacks={}}});require.register(&quot;learnboost-engine.io-client/lib/util.js&quot;,function(module,exports,require){var pageLoaded=false;var global=&quot;undefined&quot;!=typeof window?window:global;exports.inherits=function inherits(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c};exports.keys=Object.keys||function(obj){var ret=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){ret.push(i)}}return ret};exports.on=function(element,event,fn,capture){if(element.attachEvent){element.attachEvent(&quot;on&quot;+event,fn)}else if(element.addEventListener){element.addEventListener(event,fn,capture)}};exports.load=function(fn){if(global.document&amp;&amp;document.readyState===&quot;complete&quot;||pageLoaded){return fn()}exports.on(global,&quot;load&quot;,fn,false)};if(&quot;undefined&quot;!=typeof window){exports.load(function(){pageLoaded=true})}exports.defer=function(fn){if(!exports.ua.webkit||&quot;undefined&quot;!=typeof importScripts){return fn()}exports.load(function(){setTimeout(fn,100)})};var rvalidchars=/^[\],:{}\s]*$/,rvalidescape=/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rvalidtokens=/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rtrimLeft=/^\s+/,rtrimRight=/\s+$/;exports.parseJSON=function(data){if(&quot;string&quot;!=typeof data||!data){return null}data=data.replace(rtrimLeft,&quot;&quot;).replace(rtrimRight,&quot;&quot;);if(global.JSON&amp;&amp;JSON.parse){return JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,&quot;@&quot;).replace(rvalidtokens,&quot;]&quot;).replace(rvalidbraces,&quot;&quot;))){return new Function(&quot;return &quot;+data)()}};exports.ua={};exports.ua.hasCORS=&quot;undefined&quot;!=typeof XMLHttpRequest&amp;&amp;function(){try{var a=new XMLHttpRequest}catch(e){return false}return a.withCredentials!=undefined}();exports.ua.webkit=&quot;undefined&quot;!=typeof navigator&amp;&amp;/webkit/i.test(navigator.userAgent);exports.ua.gecko=&quot;undefined&quot;!=typeof navigator&amp;&amp;/gecko/i.test(navigator.userAgent);exports.ua.android=&quot;undefined&quot;!=typeof navigator&amp;&amp;/android/i.test(navigator.userAgent);exports.ua.ios=&quot;undefined&quot;!=typeof navigator&amp;&amp;/^(iPad|iPhone|iPod)$/.test(navigator.platform);exports.ua.ios6=exports.ua.ios&amp;&amp;/OS 6_/.test(navigator.userAgent);exports.request=function request(xdomain){if(&quot;undefined&quot;!=typeof process){var XMLHttpRequest=require(&quot;xmlhttprequest&quot;).XMLHttpRequest;return new XMLHttpRequest}if(xdomain&amp;&amp;&quot;undefined&quot;!=typeof XDomainRequest&amp;&amp;!exports.ua.hasCORS){return new XDomainRequest}try{if(&quot;undefined&quot;!=typeof XMLHttpRequest&amp;&amp;(!xdomain||exports.ua.hasCORS)){return new XMLHttpRequest}}catch(e){}if(!xdomain){try{return new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)}catch(e){}}};var re=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=[&quot;source&quot;,&quot;protocol&quot;,&quot;authority&quot;,&quot;userInfo&quot;,&quot;user&quot;,&quot;password&quot;,&quot;host&quot;,&quot;port&quot;,&quot;relative&quot;,&quot;path&quot;,&quot;directory&quot;,&quot;file&quot;,&quot;query&quot;,&quot;anchor&quot;];exports.parseUri=function(str){var m=re.exec(str||&quot;&quot;),uri={},i=14;while(i--){uri[parts[i]]=m[i]||&quot;&quot;}return uri};exports.qs=function(obj){var str=&quot;&quot;;for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+=&quot;&amp;&quot;;str+=i+&quot;=&quot;+encodeURIComponent(obj[i])}}return str}});require.register(&quot;learnboost-engine.io-client/lib/transports/index.js&quot;,function(module,exports,require){var XHR=require(&quot;./polling-xhr&quot;),JSONP=require(&quot;./polling-jsonp&quot;),websocket=require(&quot;./websocket&quot;),flashsocket=require(&quot;./flashsocket&quot;),util=require(&quot;../util&quot;);exports.polling=polling;exports.websocket=websocket;exports.flashsocket=flashsocket;var global=&quot;undefined&quot;!=typeof window?window:global;function polling(opts){var xhr,xd=false,isXProtocol=false;if(global.location){var isSSL=&quot;https:&quot;==location.protocol;var port=location.port;if(Number(port)!=port){port=isSSL?443:80}xd=opts.host!=location.hostname||port!=opts.port;isXProtocol=opts.secure!=isSSL}xhr=util.request(xd);if(isXProtocol&amp;&amp;global.XDomainRequest&amp;&amp;xhr instanceof global.XDomainRequest){return new JSONP(opts)}if(xhr&amp;&amp;!opts.forceJSONP){return new XHR(opts)}else{return new JSONP(opts)}}});require.register(&quot;learnboost-engine.io-client/lib/transports/polling.js&quot;,function(module,exports,require){var Transport=require(&quot;../transport&quot;),util=require(&quot;../util&quot;),parser=require(&quot;../parser&quot;),debug=require(&quot;debug&quot;)(&quot;engine.io-client:polling&quot;);module.exports=Polling;var global=&quot;undefined&quot;!=typeof window?window:global;function Polling(opts){Transport.call(this,opts)}util.inherits(Polling,Transport);Polling.prototype.name=&quot;polling&quot;;Polling.prototype.doOpen=function(){this.poll()};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState=&quot;pausing&quot;;function pause(){debug(&quot;paused&quot;);self.readyState=&quot;paused&quot;;onPause()}if(this.polling||!this.writable){var total=0;if(this.polling){debug(&quot;we are currently polling - waiting to pause&quot;);total++;this.once(&quot;pollComplete&quot;,function(){debug(&quot;pre-pause polling complete&quot;);--total||pause()})}if(!this.writable){debug(&quot;we are currently writing - waiting to pause&quot;);total++;this.once(&quot;drain&quot;,function(){debug(&quot;pre-pause writing complete&quot;);--total||pause()})}}else{pause()}};Polling.prototype.poll=function(){debug(&quot;polling&quot;);this.polling=true;this.doPoll();this.emit(&quot;poll&quot;)};Polling.prototype.onData=function(data){debug(&quot;polling got data %s&quot;,data);var packets=parser.decodePayload(data);for(var i=0,l=packets.length;i&lt;l;i++){if(&quot;opening&quot;==this.readyState){this.onOpen()}if(&quot;close&quot;==packets[i].type){this.onClose();return}this.onPacket(packets[i])}this.polling=false;this.emit(&quot;pollComplete&quot;);if(&quot;open&quot;==this.readyState){this.poll()}else{debug(&#39;ignoring poll - transport state &quot;%s&quot;&#39;,this.readyState)}};Polling.prototype.doClose=function(){debug(&quot;sending close packet&quot;);this.send([{type:&quot;close&quot;}])};Polling.prototype.write=function(packets){var self=this;this.writable=false;this.doWrite(parser.encodePayload(packets),function(){self.writable=true;self.emit(&quot;drain&quot;)})};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?&quot;https&quot;:&quot;http&quot;;var port=&quot;&quot;;if(global.ActiveXObject||util.ua.android||util.ua.ios6||this.timestampRequests){query[this.timestampParam]=+new Date}query=util.qs(query);if(this.port&amp;&amp;(&quot;https&quot;==schema&amp;&amp;this.port!=443||&quot;http&quot;==schema&amp;&amp;this.port!=80)){port=&quot;:&quot;+this.port}if(query.length){query=&quot;?&quot;+query}return schema+&quot;://&quot;+this.host+port+this.path+query}});require.register(&quot;learnboost-engine.io-client/lib/transports/polling-xhr.js&quot;,function(module,exports,require){var Polling=require(&quot;./polling&quot;),util=require(&quot;../util&quot;),Emitter=require(&quot;../emitter&quot;),debug=require(&quot;debug&quot;)(&quot;engine.io-client:polling-xhr&quot;);module.exports=XHR;module.exports.Request=Request;var global=&quot;undefined&quot;!=typeof window?window:global;var xobject=global[[&quot;Active&quot;].concat(&quot;Object&quot;).join(&quot;X&quot;)];function empty(){}function XHR(opts){Polling.call(this,opts);if(global.location){this.xd=opts.host!=global.location.hostname||global.location.port!=opts.port}}util.inherits(XHR,Polling);XHR.prototype.doOpen=function(){var self=this;util.defer(function(){Polling.prototype.doOpen.call(self)})};XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;return new Request(opts)};XHR.prototype.doWrite=function(data,fn){var req=this.request({method:&quot;POST&quot;,data:data});var self=this;req.on(&quot;success&quot;,fn);req.on(&quot;error&quot;,function(err){self.onError(&quot;xhr post error&quot;,err)});this.sendXhr=req};XHR.prototype.doPoll=function(){debug(&quot;xhr poll&quot;);var req=this.request();var self=this;req.on(&quot;data&quot;,function(data){self.onData(data)});req.on(&quot;error&quot;,function(err){self.onError(&quot;xhr poll error&quot;,err)});this.pollXhr=req};function Request(opts){this.method=opts.method||&quot;GET&quot;;this.uri=opts.uri;this.xd=!!opts.xd;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.create()}Emitter(Request.prototype);Request.prototype.create=function(){var xhr=this.xhr=util.request(this.xd);var self=this;xhr.open(this.method,this.uri,this.async);if(&quot;POST&quot;==this.method){try{if(xhr.setRequestHeader){xhr.setRequestHeader(&quot;Content-type&quot;,&quot;text/plain;charset=UTF-8&quot;)}else{xhr.contentType=&quot;text/plain&quot;}}catch(e){}}if(this.xd&amp;&amp;global.XDomainRequest&amp;&amp;xhr instanceof XDomainRequest){xhr.onerror=function(e){self.onError(e)};xhr.onload=function(){self.onData(xhr.responseText)};xhr.onprogress=empty}else{if(&quot;withCredentials&quot;in xhr){xhr.withCredentials=true}xhr.onreadystatechange=function(){var data;try{if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){data=xhr.responseText}else{self.onError(xhr.status)}}catch(e){self.onError(e)}if(undefined!==data){self.onData(data)}}}debug(&quot;sending xhr with url %s | data %s&quot;,this.uri,this.data);xhr.send(this.data);if(xobject){this.index=Request.requestsCount++;Request.requests[this.index]=this}};Request.prototype.onSuccess=function(){this.emit(&quot;success&quot;);this.cleanup()};Request.prototype.onData=function(data){this.emit(&quot;data&quot;,data);this.onSuccess()};Request.prototype.onError=function(err){this.emit(&quot;error&quot;,err);this.cleanup()};Request.prototype.cleanup=function(){this.xhr.onreadystatechange=empty;this.xhr.onload=this.xhr.onerror=empty;try{this.xhr.abort()}catch(e){}if(xobject){delete Request.requests[this.index]}this.xhr=null};Request.prototype.abort=function(){this.cleanup()};if(xobject){Request.requestsCount=0;Request.requests={};global.attachEvent(&quot;onunload&quot;,function(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort()}}})}});require.register(&quot;learnboost-engine.io-client/lib/transports/polling-jsonp.js&quot;,function(module,exports,require){var Polling=require(&quot;./polling&quot;),util=require(&quot;../util&quot;);module.exports=JSONPPolling;var global=&quot;undefined&quot;!=typeof window?window:global;var rNewline=/\n/g;var callbacks;var index=0;function empty(){}function JSONPPolling(opts){Polling.call(this,opts);if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio}this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg)});this.query.j=this.index}util.inherits(JSONPPolling,Polling);JSONPPolling.prototype.doOpen=function(){var self=this;util.defer(function(){Polling.prototype.doOpen.call(self)})};JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null}Polling.prototype.doClose.call(this)};JSONPPolling.prototype.doPoll=function(){var script=document.createElement(&quot;script&quot;);if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}script.async=true;script.src=this.uri();var insertAt=document.getElementsByTagName(&quot;script&quot;)[0];insertAt.parentNode.insertBefore(script,insertAt);this.script=script;if(util.ua.gecko){setTimeout(function(){var iframe=document.createElement(&quot;iframe&quot;);document.body.appendChild(iframe);document.body.removeChild(iframe)},100)}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement(&quot;form&quot;),area=document.createElement(&quot;textarea&quot;),id=this.iframeId=&quot;eio_iframe_&quot;+this.index,iframe;form.className=&quot;socketio&quot;;form.style.position=&quot;absolute&quot;;form.style.top=&quot;-1000px&quot;;form.style.left=&quot;-1000px&quot;;form.target=id;form.method=&quot;POST&quot;;form.setAttribute(&quot;accept-charset&quot;,&quot;utf-8&quot;);area.name=&quot;d&quot;;form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area}this.form.action=this.uri();function complete(){initIframe();fn()}function initIframe(){if(self.iframe){self.form.removeChild(self.iframe)}try{iframe=document.createElement(&#39;&lt;iframe name=&quot;&#39;+self.iframeId+&#39;&quot;&gt;&#39;)}catch(e){iframe=document.createElement(&quot;iframe&quot;);iframe.name=self.iframeId}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe}initIframe();this.area.value=data.replace(rNewline,&quot;\\n&quot;);try{this.form.submit()}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState==&quot;complete&quot;){complete()}}}else{this.iframe.onload=complete}}});require.register(&quot;learnboost-engine.io-client/lib/transports/websocket.js&quot;,function(module,exports,require){var Transport=require(&quot;../transport&quot;),parser=require(&quot;../parser&quot;),util=require(&quot;../util&quot;),debug=require(&quot;debug&quot;)(&quot;engine.io-client:websocket&quot;);module.exports=WS;var global=&quot;undefined&quot;!=typeof window?window:global;function WS(opts){Transport.call(this,opts)}util.inherits(WS,Transport);WS.prototype.name=&quot;websocket&quot;;WS.prototype.doOpen=function(){if(!this.check()){return}var self=this;this.socket=new(ws())(this.uri());this.socket.onopen=function(){self.onOpen()};this.socket.onclose=function(){self.onClose()};this.socket.onmessage=function(ev){self.onData(ev.data)};this.socket.onerror=function(e){self.onError(&quot;websocket error&quot;,e)}};WS.prototype.write=function(packets){for(var i=0,l=packets.length;i&lt;l;i++){this.socket.send(parser.encodePacket(packets[i]))}};WS.prototype.doClose=function(){if(typeof this.socket!==&quot;undefined&quot;){this.socket.close()}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?&quot;wss&quot;:&quot;ws&quot;;var port=&quot;&quot;;if(this.port&amp;&amp;(&quot;wss&quot;==schema&amp;&amp;this.port!=443||&quot;ws&quot;==schema&amp;&amp;this.port!=80)){port=&quot;:&quot;+this.port}if(this.timestampRequests){query[this.timestampParam]=+new Date}query=util.qs(query);if(query.length){query=&quot;?&quot;+query}return schema+&quot;://&quot;+this.host+port+this.path+query};WS.prototype.check=function(){var websocket=ws();return!!websocket&amp;&amp;!(&quot;__initialize&quot;in websocket&amp;&amp;this.name===WS.prototype.name)};function ws(){if(&quot;undefined&quot;!=typeof process){return require(&quot;ws&quot;)}return global.WebSocket||global.MozWebSocket}});require.register(&quot;learnboost-engine.io-client/lib/transports/flashsocket.js&quot;,function(module,exports,require){var WS=require(&quot;./websocket&quot;),util=require(&quot;../util&quot;),debug=require(&quot;debug&quot;)(&quot;engine.io-client:flashsocket&quot;);module.exports=FlashWS;var xobject=global[[&quot;Active&quot;].concat(&quot;Object&quot;).join(&quot;X&quot;)];function FlashWS(options){WS.call(this,options);this.flashPath=options.flashPath;this.policyPort=options.policyPort}util.inherits(FlashWS,WS);FlashWS.prototype.name=&quot;flashsocket&quot;;FlashWS.prototype.doOpen=function(){if(!this.check()){return}function log(type){return function(){var str=Array.prototype.join.call(arguments,&quot; &quot;);debug(&quot;[websocketjs %s] %s&quot;,type,str)}}WEB_SOCKET_LOGGER={log:log(&quot;debug&quot;),error:log(&quot;error&quot;)};WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR=true;WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=true;if(&quot;undefined&quot;==typeof WEB_SOCKET_SWF_LOCATION){WEB_SOCKET_SWF_LOCATION=this.flashPath+&quot;WebSocketMainInsecure.swf&quot;}var deps=[this.flashPath+&quot;web_socket.js&quot;];if(&quot;undefined&quot;==typeof swfobject){deps.unshift(this.flashPath+&quot;swfobject.js&quot;)}var self=this;load(deps,function(){self.ready(function(){WebSocket.__addTask(function(){WS.prototype.doOpen.call(self)})})})};FlashWS.prototype.doClose=function(){if(!this.socket)return;var self=this;WebSocket.__addTask(function(){WS.prototype.doClose.call(self)})};FlashWS.prototype.write=function(){var self=this,args=arguments;WebSocket.__addTask(function(){WS.prototype.write.apply(self,args)})};FlashWS.prototype.ready=function(fn){if(typeof WebSocket==&quot;undefined&quot;||!(&quot;__initialize&quot;in WebSocket)||!swfobject){return}if(swfobject.getFlashPlayerVersion().major&lt;10){return}function init(){if(!FlashWS.loaded){if(843!=self.policyPort){WebSocket.loadFlashPolicyFile(&quot;xmlsocket://&quot;+self.host+&quot;:&quot;+self.policyPort)}WebSocket.__initialize();FlashWS.loaded=true}fn.call(self)}var self=this;if(document.body){return init()}util.load(init)};FlashWS.prototype.check=function(){if(&quot;undefined&quot;!=typeof process){return false}if(typeof WebSocket!=&quot;undefined&quot;&amp;&amp;!(&quot;__initialize&quot;in WebSocket)){return false}if(xobject){var control=null;try{control=new xobject(&quot;ShockwaveFlash.ShockwaveFlash&quot;)}catch(e){}if(control){return true}}else{for(var i=0,l=navigator.plugins.length;i&lt;l;i++){for(var j=0,m=navigator.plugins[i].length;j&lt;m;j++){if(navigator.plugins[i][j].description==&quot;Shockwave Flash&quot;){return true}}}}return false};var scripts={};function create(path,fn){if(scripts[path])return fn();var el=document.createElement(&quot;script&quot;);var loaded=false;debug(&#39;loading &quot;%s&quot;&#39;,path);el.onload=el.onreadystatechange=function(){if(loaded||scripts[path])return;var rs=el.readyState;if(!rs||&quot;loaded&quot;==rs||&quot;complete&quot;==rs){debug(&#39;loaded &quot;%s&quot;&#39;,path);el.onload=el.onreadystatechange=null;loaded=true;scripts[path]=true;fn()}};el.async=1;el.src=path;var head=document.getElementsByTagName(&quot;head&quot;)[0];head.insertBefore(el,head.firstChild)}function load(arr,fn){function process(i){if(!arr[i])return fn();create(arr[i],function(){process(++i)})}process(0)}});require.register(&quot;component-json/index.js&quot;,function(module,exports,require){module.exports=&quot;undefined&quot;==typeof JSON?require(&quot;json-fallback&quot;):JSON});require.register(&quot;learnboost-socket.io-protocol/index.js&quot;,function(module,exports,require){var json;try{json=require(&quot;json&quot;)}catch(e){json=JSON}exports.protocol=1;exports.types=[&quot;CONNECT&quot;,&quot;DISCONNECT&quot;,&quot;EVENT&quot;,&quot;ACK&quot;,&quot;ERROR&quot;];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.encode=function(obj){var str=&quot;&quot;;var nsp=false;str+=obj.type;if(obj.nsp&amp;&amp;&quot;/&quot;!=obj.nsp){nsp=true;str+=obj.nsp}if(obj.id){if(nsp){str+=&quot;,&quot;;nsp=false}str+=obj.id}if(obj.data){if(nsp)str+=&quot;,&quot;;str+=json.stringify(obj.data)}return str};exports.decode=function(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(&quot;/&quot;==str.charAt(i+1)){p.nsp=&quot;&quot;;while(++i){var c=str.charAt(i);if(&quot;,&quot;==c)break;p.nsp+=c;if(i+1==str.length)break}}else{p.nsp=&quot;/&quot;}var next=str.charAt(i+1);if(&quot;&quot;!=next&amp;&amp;Number(next)==next){p.id=&quot;&quot;;while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break}p.id+=str.charAt(i);if(i+1==str.length)break}}if(str.charAt(++i)){try{p.data=json.parse(str.substr(i))}catch(e){return error()}}return p};function error(data){return{type:exports.ERROR,data:&quot;parser error&quot;}}});require.register(&quot;component-emitter/index.js&quot;,function(module,exports,require){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}fn._off=on;this.on(event,on);return this};Emitter.prototype.off=function(event,fn){this._callbacks=this._callbacks||{};var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var i=callbacks.indexOf(fn._off||fn);if(~i)callbacks.splice(i,1);return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i&lt;len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}});require.register(&quot;component-bind/index.js&quot;,function(module,exports,require){var slice=[].slice;module.exports=function(obj,fn){if(&quot;string&quot;==typeof fn)fn=obj[fn];if(&quot;function&quot;!=typeof fn)throw new Error(&quot;bind() requires a function&quot;);var args=[].slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)))</div><div class='line' id='LC2'>}}});require.register(&quot;component-json-fallback/index.js&quot;,function(module,exports,require){var JSON={};(function(){&quot;use strict&quot;;function f(n){return n&lt;10?&quot;0&quot;+n:n}if(typeof Date.prototype.toJSON!==&quot;function&quot;){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+&quot;-&quot;+f(this.getUTCMonth()+1)+&quot;-&quot;+f(this.getUTCDate())+&quot;T&quot;+f(this.getUTCHours())+&quot;:&quot;+f(this.getUTCMinutes())+&quot;:&quot;+f(this.getUTCSeconds())+&quot;Z&quot;:null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\&quot;\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={&quot;\b&quot;:&quot;\\b&quot;,&quot;	&quot;:&quot;\\t&quot;,&quot;\n&quot;:&quot;\\n&quot;,&quot;\f&quot;:&quot;\\f&quot;,&quot;\r&quot;:&quot;\\r&quot;,&#39;&quot;&#39;:&#39;\\&quot;&#39;,&quot;\\&quot;:&quot;\\\\&quot;},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?&#39;&quot;&#39;+string.replace(escapable,function(a){var c=meta[a];return typeof c===&quot;string&quot;?c:&quot;\\u&quot;+(&quot;0000&quot;+a.charCodeAt(0).toString(16)).slice(-4)})+&#39;&quot;&#39;:&#39;&quot;&#39;+string+&#39;&quot;&#39;}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&amp;&amp;typeof value===&quot;object&quot;&amp;&amp;typeof value.toJSON===&quot;function&quot;){value=value.toJSON(key)}if(typeof rep===&quot;function&quot;){value=rep.call(holder,key,value)}switch(typeof value){case&quot;string&quot;:return quote(value);case&quot;number&quot;:return isFinite(value)?String(value):&quot;null&quot;;case&quot;boolean&quot;:case&quot;null&quot;:return String(value);case&quot;object&quot;:if(!value){return&quot;null&quot;}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)===&quot;[object Array]&quot;){length=value.length;for(i=0;i&lt;length;i+=1){partial[i]=str(i,value)||&quot;null&quot;}v=partial.length===0?&quot;[]&quot;:gap?&quot;[\n&quot;+gap+partial.join(&quot;,\n&quot;+gap)+&quot;\n&quot;+mind+&quot;]&quot;:&quot;[&quot;+partial.join(&quot;,&quot;)+&quot;]&quot;;gap=mind;return v}if(rep&amp;&amp;typeof rep===&quot;object&quot;){length=rep.length;for(i=0;i&lt;length;i+=1){if(typeof rep[i]===&quot;string&quot;){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?&quot;: &quot;:&quot;:&quot;)+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?&quot;: &quot;:&quot;:&quot;)+v)}}}}v=partial.length===0?&quot;{}&quot;:gap?&quot;{\n&quot;+gap+partial.join(&quot;,\n&quot;+gap)+&quot;\n&quot;+mind+&quot;}&quot;:&quot;{&quot;+partial.join(&quot;,&quot;)+&quot;}&quot;;gap=mind;return v}}if(typeof JSON.stringify!==&quot;function&quot;){JSON.stringify=function(value,replacer,space){var i;gap=&quot;&quot;;indent=&quot;&quot;;if(typeof space===&quot;number&quot;){for(i=0;i&lt;space;i+=1){indent+=&quot; &quot;}}else if(typeof space===&quot;string&quot;){indent=space}rep=replacer;if(replacer&amp;&amp;typeof replacer!==&quot;function&quot;&amp;&amp;(typeof replacer!==&quot;object&quot;||typeof replacer.length!==&quot;number&quot;)){throw new Error(&quot;JSON.stringify&quot;)}return str(&quot;&quot;,{&quot;&quot;:value})}}if(typeof JSON.parse!==&quot;function&quot;){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&amp;&amp;typeof value===&quot;object&quot;){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return&quot;\\u&quot;+(&quot;0000&quot;+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g,&quot;@&quot;).replace(/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,&quot;]&quot;).replace(/(?:^|:|,)(?:\s*\[)+/g,&quot;&quot;))){j=eval(&quot;(&quot;+text+&quot;)&quot;);return typeof reviver===&quot;function&quot;?walk({&quot;&quot;:j},&quot;&quot;):j}throw new SyntaxError(&quot;JSON.parse&quot;)}}})();module.exports=JSON});require.register(&quot;timoxley-to-array/index.js&quot;,function(module,exports,require){module.exports=function toArray(collection){if(typeof collection===&quot;undefined&quot;)return[];if(collection===null)return[null];if(collection===window)return[window];if(typeof collection===&quot;string&quot;)return[collection];if(Array.isArray(collection))return collection.slice();if(typeof collection.length!=&quot;number&quot;)return[collection];if(typeof collection===&quot;function&quot;)return[collection];var arr=[];for(var i=0;i&lt;collection.length;i++){if(collection.hasOwnProperty(i)||i in collection){arr.push(collection[i])}}if(!arr.length)return[];return arr}});require.register(&quot;visionmedia-debug/index.js&quot;,function(module,exports,require){if(&quot;undefined&quot;==typeof window){module.exports=require(&quot;./lib/debug&quot;)}else{module.exports=require(&quot;./debug&quot;)}});require.register(&quot;visionmedia-debug/debug.js&quot;,function(module,exports,require){module.exports=debug;function debug(name){if(!debug.enabled(name))return function(){};return function(fmt){var curr=new Date;var ms=curr-(debug[name]||curr);debug[name]=curr;fmt=name+&quot; &quot;+fmt+&quot; +&quot;+debug.humanize(ms);window.console&amp;&amp;console.log&amp;&amp;Function.prototype.apply.call(console.log,console,arguments)}}debug.names=[];debug.skips=[];debug.enable=function(name){localStorage.debug=name;var split=(name||&quot;&quot;).split(/[\s,]+/),len=split.length;for(var i=0;i&lt;len;i++){name=split[i].replace(&quot;*&quot;,&quot;.*?&quot;);if(name[0]===&quot;-&quot;){debug.skips.push(new RegExp(&quot;^&quot;+name.substr(1)+&quot;$&quot;))}else{debug.names.push(new RegExp(&quot;^&quot;+name+&quot;$&quot;))}}};debug.disable=function(){debug.enable(&quot;&quot;)};debug.humanize=function(ms){var sec=1e3,min=60*1e3,hour=60*min;if(ms&gt;=hour)return(ms/hour).toFixed(1)+&quot;h&quot;;if(ms&gt;=min)return(ms/min).toFixed(1)+&quot;m&quot;;if(ms&gt;=sec)return(ms/sec|0)+&quot;s&quot;;return ms+&quot;ms&quot;};debug.enabled=function(name){for(var i=0,len=debug.skips.length;i&lt;len;i++){if(debug.skips[i].test(name)){return false}}for(var i=0,len=debug.names.length;i&lt;len;i++){if(debug.names[i].test(name)){return true}}return false};if(window.localStorage)debug.enable(localStorage.debug)});require.register(&quot;socket.io/lib/index.js&quot;,function(module,exports,require){var url=require(&quot;./url&quot;),parser=require(&quot;socket.io-parser&quot;),Manager=require(&quot;./manager&quot;);module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){opts=opts||{};var parsed=url(uri);var href=parsed.href;var io;if(opts.forceNew||false===opts.multiplex){io=Manager(href,opts)}else{var id=parsed.id;if(!cache[id])cache[id]=Manager(href,opts);io=cache[id]}return io.socket(parsed.pathname||&quot;/&quot;)}if(&quot;undefined&quot;!=typeof process){var read=require(&quot;fs&quot;).readFileSync;exports.source=read(__dirname+&quot;/../socket.io-client.js&quot;)}exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=require(&quot;./manager&quot;);exports.Socket=require(&quot;./socket&quot;);exports.Emitter=require(&quot;./emitter&quot;)});require.register(&quot;socket.io/lib/manager.js&quot;,function(module,exports,require){var url=require(&quot;./url&quot;),eio=require(&quot;./engine&quot;),Socket=require(&quot;./socket&quot;),Emitter=require(&quot;./emitter&quot;),parser=require(&quot;socket.io-parser&quot;),on=require(&quot;./on&quot;),debug=require(&quot;debug&quot;)(&quot;socket.io-client:manager&quot;),object,bind;module.exports=Manager;function Manager(socket,opts){if(!(this instanceof Manager))return new Manager(socket,opts);opts=opts||{};opts.path=opts.path||&quot;/socket.io&quot;;this.nsps={};this.subs=[];this.reconnection(opts.reconnection);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1e3);this.reconnectionDelayMax(opts.reconnectionDelayMax||5e3);this.timeout(null==opts.timeout?1e4:opts.timeout);this.readyState=&quot;closed&quot;;if(!socket||!socket.write)socket=eio(socket,opts);this.engine=socket;this.open()}Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;return this};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;return this};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this};Manager.prototype.open=Manager.prototype.connect=function(fn){if(~this.readyState.indexOf(&quot;open&quot;))return this;var socket=this.engine;var self=this;var timerSub;this.readyState=&quot;opening&quot;;var openSub=on(socket,&quot;open&quot;,bind(this,&quot;onopen&quot;));var errorSub=on(socket,&quot;error&quot;,function(data){self.cleanup();self.emit(&quot;connect_error&quot;,data);if(fn){var err=new Error(&quot;Connection error&quot;);err.data=data;fn(err)}});if(false!==this._timeout){var timeout=this._timeout;debug(&quot;connect attempt will timeout after %d&quot;,timeout);var timer=setTimeout(function(){debug(&quot;connect attempt timed out after %d&quot;,timeout);openSub.destroy();errorSub.destroy();socket.close();socket.emit(&quot;error&quot;,&quot;timeout&quot;);self.emit(&quot;connect_timeout&quot;,timeout)},timeout);timerSub={destroy:function(){clearTimeout(timer)}};this.subs.push(timerSub)}this.subs.push(openSub);this.subs.push(errorSub);return this};Manager.prototype.onopen=function(){this.cleanup();this.readyState=&quot;open&quot;;this.emit(&quot;open&quot;);var socket=this.engine;this.subs.push(on(socket,&quot;data&quot;,bind(this,&quot;ondata&quot;)));this.subs.push(on(socket,&quot;error&quot;,bind(this,&quot;onerror&quot;)));this.subs.push(on(socket,&quot;close&quot;,bind(this,&quot;onclose&quot;)))};Manager.prototype.ondata=function(data){this.emit(&quot;packet&quot;,parser.decode(data))};Manager.prototype.onerror=function(err){this.emit(&quot;error&quot;,err)};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket}return socket};Manager.prototype.destroy=function(socket){delete this.nsps[socket.nsp];if(!object.length(this.nsps)){this.close()}};Manager.prototype.cleanup=function(){var sub;while(sub=this.subs.shift())sub.destroy()};Manager.prototype.close=Manager.prototype.disconnect=function(){this.skipReconnect=true;this.cleanup();this.engine.close()};Manager.prototype.onclose=function(){this.cleanup();if(!this.skipReconnect){var self=this;this.reconnect()}};Manager.prototype.reconnect=function(){var self=this;this.attempts++;if(this.attempts&gt;this._reconnectionAttempts){this.emit(&quot;reconnect_failed&quot;);this.reconnecting=false}else{var delay=this.attempts*this._reconnectionDelay;delay=Math.min(delay,this._reconnectionDelayMax);debug(&quot;will wait %d before reconnect attempt&quot;,delay);this.reconnecting=true;var timer=setTimeout(function(){debug(&quot;attemptign reconnect&quot;);self.open(function(err){if(err){debug(&quot;reconnect attempt error&quot;);self.reconnect();return self.emit(&quot;reconnect_error&quot;,err.data)}else{debug(&quot;reconnect success&quot;);self.onreconnect()}})},delay);this.subs.push({destroy:function(){clearTimeout(timer)}})}};Manager.prototype.onreconnect=function(){var attempt=this.attempts;this.attempts=0;this.reconnecting=false;this.emit(&quot;reconnect&quot;,attempt)};try{bind=require(&quot;bind&quot;);object=require(&quot;object&quot;)}catch(e){bind=require(&quot;bind-component&quot;);object=require(&quot;object-component&quot;)}});require.register(&quot;socket.io/lib/engine.js&quot;,function(module,exports,require){var engine;try{engine=require(&quot;engine.io-client&quot;)}catch(e){engine=require(&quot;engine.io&quot;)}module.exports=engine});require.register(&quot;socket.io/lib/socket.js&quot;,function(module,exports,require){var parser=require(&quot;socket.io-parser&quot;),Emitter=require(&quot;./emitter&quot;),toArray=require(&quot;to-array&quot;),debug=require(&quot;debug&quot;)(&quot;socket.io-client:socket&quot;),on=require(&quot;./on&quot;),bind;module.exports=exports=Socket;var events=exports.events=[&quot;connect&quot;,&quot;disconnect&quot;,&quot;error&quot;];var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};this.open();this.buffer=[];this.connected=false}Emitter(Socket.prototype);Socket.prototype.open=Socket.prototype.connect=function(){var io=this.io;io.open();if(&quot;open&quot;==this.io.readyState)this.onopen();this.subs=[on(io,&quot;open&quot;,bind(this,&quot;onopen&quot;)),on(io,&quot;error&quot;,bind(this,&quot;onerror&quot;))]};Socket.prototype.send=function(){var args=toArray(arguments);args.shift(&quot;message&quot;);this.emit.apply(this,args);return this};Socket.prototype.emit=function(ev){if(~events.indexOf(ev)){emit.apply(this,arguments)}else{var args=toArray(arguments);var packet={type:parser.EVENT,args:args};if(&quot;function&quot;==typeof args[args.length-1]){debug(&quot;emitting packet with ack id %d&quot;,this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++}this.packet(packet)}return this};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.write(parser.encode(packet))};Socket.prototype.onerror=function(data){this.emit(&quot;error&quot;,data)};Socket.prototype.onopen=function(){var io=this.io;this.subs.push(on(io,&quot;packet&quot;,bind(this,&quot;onpacket&quot;)),on(io,&quot;close&quot;,bind(this,&quot;onclose&quot;)))};Socket.prototype.onclose=function(reason){debug(&quot;close (%s)&quot;,reason);this.emit(&quot;disconnect&quot;,reason)};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit(&quot;error&quot;,packet.data);break}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug(&quot;emitting event %j&quot;,args);if(packet.id){debug(&quot;attaching ack callback to event&quot;);args.push(this.ack(packet.id))}if(this.connected){emit.apply(this,args)}else{this.buffer.push(args)}};Socket.prototype.ack=function(){var self=this;var sent=false;return function(){if(sent)return;var args=toArray(arguments);debug(&quot;sending ack %j&quot;,args);self.packet({type:parser.ACK,data:args})}};Socket.prototype.onack=function(packet){debug(&quot;calling ack %s with %j&quot;,packet.id,packet.data);this.acks[packet.id].apply(this,packet.data);delete this.acks[packet.id]};Socket.prototype.onconnect=function(){this.emit(&quot;connect&quot;);this.connected=true;this.emitBuffered()};Socket.prototype.emitBuffered=function(){for(var i=0;i&lt;this.buffer.length;i++){emit.apply(this,this.buffer[i])}this.buffer=[]};Socket.prototype.ondisconnect=function(){debug(&quot;server disconnect (%s)&quot;,this.nsp);this.destroy()};Socket.prototype.destroy=function(){debug(&quot;destroying socket (%s)&quot;,this.nsp);for(var i=0;i&lt;this.subs.length;i++){this.subs[i].destroy()}this.io.destroy(this)};Socket.prototype.close=Socket.prototype.disconnect=function(){debug(&quot;performing disconnect (%s)&quot;,this.nsp);this.packet(parser.PACKET_DISCONNECT);for(var i=0;i&lt;this.subs.length;i++){this.subs[i].destroy()}this.io.destroy(this);this.onclose(&quot;io client disconnect&quot;);return this};try{bind=require(&quot;bind&quot;)}catch(e){bind=require(&quot;bind-component&quot;)}});require.register(&quot;socket.io/lib/emitter.js&quot;,function(module,exports,require){var Emitter;try{Emitter=require(&quot;emitter&quot;)}catch(e){Emitter=require(&quot;emitter-component&quot;)}module.exports=Emitter;Emitter.prototype.removeListener=function(event,fn){return this.off(event,fn)};Emitter.prototype.removeAllListeners=function(){this._callbacks={};return this}});require.alias(&quot;learnboost-engine.io-client/lib/index.js&quot;,&quot;socket.io/deps/engine.io/lib/index.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/parser.js&quot;,&quot;socket.io/deps/engine.io/lib/parser.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/socket.js&quot;,&quot;socket.io/deps/engine.io/lib/socket.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/transport.js&quot;,&quot;socket.io/deps/engine.io/lib/transport.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/emitter.js&quot;,&quot;socket.io/deps/engine.io/lib/emitter.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/util.js&quot;,&quot;socket.io/deps/engine.io/lib/util.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/transports/index.js&quot;,&quot;socket.io/deps/engine.io/lib/transports/index.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/transports/polling.js&quot;,&quot;socket.io/deps/engine.io/lib/transports/polling.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/transports/polling-xhr.js&quot;,&quot;socket.io/deps/engine.io/lib/transports/polling-xhr.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/transports/polling-jsonp.js&quot;,&quot;socket.io/deps/engine.io/lib/transports/polling-jsonp.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/transports/websocket.js&quot;,&quot;socket.io/deps/engine.io/lib/transports/websocket.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/transports/flashsocket.js&quot;,&quot;socket.io/deps/engine.io/lib/transports/flashsocket.js&quot;);require.alias(&quot;learnboost-engine.io-client/lib/index.js&quot;,&quot;socket.io/deps/engine.io/index.js&quot;);require.alias(&quot;component-emitter/index.js&quot;,&quot;learnboost-engine.io-client/deps/emitter/index.js&quot;);require.alias(&quot;visionmedia-debug/index.js&quot;,&quot;learnboost-engine.io-client/deps/debug/index.js&quot;);require.alias(&quot;visionmedia-debug/debug.js&quot;,&quot;learnboost-engine.io-client/deps/debug/debug.js&quot;);require.alias(&quot;learnboost-socket.io-protocol/index.js&quot;,&quot;socket.io/deps/socket.io-parser/index.js&quot;);require.alias(&quot;component-json/index.js&quot;,&quot;learnboost-socket.io-protocol/deps/json/index.js&quot;);require.alias(&quot;component-emitter/index.js&quot;,&quot;socket.io/deps/emitter/index.js&quot;);require.alias(&quot;component-bind/index.js&quot;,&quot;socket.io/deps/bind/index.js&quot;);require.alias(&quot;component-json-fallback/index.js&quot;,&quot;socket.io/deps/json-fallback/index.js&quot;);require.alias(&quot;timoxley-to-array/index.js&quot;,&quot;socket.io/deps/to-array/index.js&quot;);require.alias(&quot;visionmedia-debug/index.js&quot;,&quot;socket.io/deps/debug/index.js&quot;);require.alias(&quot;visionmedia-debug/debug.js&quot;,&quot;socket.io/deps/debug/debug.js&quot;);if(&quot;undefined&quot;==typeof module){window.eio=require(&quot;socket.io&quot;)}else{module.exports=require(&quot;socket.io&quot;)}})();</div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543529" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.08070s from fe13.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/LearnBoost/socket.io-client/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.08116' data-host='fe13'></span>
    
  </body>
</html>

