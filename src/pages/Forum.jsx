import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import ScrambleText from '../components/ui/ScrambleText'
import Section from '../components/sections/Section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { 
  MessageCircle, ThumbsUp, Clock, User, TrendingUp, 
  Plus, X, Send, Eye, MessageSquare
} from 'lucide-react'

// Mock data for forum posts
const forumPosts = [
  {
    id: 1,
    title: 'How to integrate Tickfy SDK in React?',
    author: 'DevMaster',
    category: 'Development',
    views: 1234,
    replies: 23,
    likes: 45,
    timeAgo: '2 hours ago',
    excerpt: 'I\'m trying to integrate the Tickfy SDK into my React application but facing some issues with the initialization...',
    isHot: true
  },
  {
    id: 2,
    title: 'Best practices for NFT ticket resale',
    author: 'EventProducer',
    category: 'Best Practices',
    views: 892,
    replies: 15,
    likes: 32,
    timeAgo: '5 hours ago',
    excerpt: 'What are the recommended resale fee percentages for music festivals? Looking for community feedback...',
    isHot: true
  },
  {
    id: 3,
    title: 'TKFY staking rewards explanation',
    author: 'CryptoMiner',
    category: 'Mining',
    views: 2341,
    replies: 48,
    likes: 89,
    timeAgo: '1 day ago',
    excerpt: 'Can someone explain how the staking rewards are calculated? I have 10,000 TKFY staked...',
    isHot: true
  },
  {
    id: 4,
    title: 'Event check-in QR code not working',
    author: 'EventOrganizer',
    category: 'Support',
    views: 567,
    replies: 8,
    likes: 12,
    timeAgo: '1 day ago',
    excerpt: 'Some attendees are reporting that their QR codes are not scanning properly at the entrance...',
    isHot: false
  },
  {
    id: 5,
    title: 'Feature request: Multi-language support',
    author: 'GlobalEvents',
    category: 'Feature Request',
    views: 445,
    replies: 19,
    likes: 67,
    timeAgo: '2 days ago',
    excerpt: 'It would be great to have multi-language support for international events...',
    isHot: false
  },
  {
    id: 6,
    title: 'Treasury address verification',
    author: 'SecurityFirst',
    category: 'Security',
    views: 1890,
    replies: 31,
    likes: 78,
    timeAgo: '3 days ago',
    excerpt: 'Is there an official way to verify the treasury address before sending USDT?...',
    isHot: true
  }
]

const categories = [
  { name: 'All', count: 124 },
  { name: 'Development', count: 45 },
  { name: 'Mining', count: 23 },
  { name: 'Support', count: 31 },
  { name: 'Best Practices', count: 15 },
  { name: 'Feature Request', count: 10 }
]

export default function Forum() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [newPost, setNewPost] = useState({
    title: '',
    category: 'Development',
    content: ''
  })

  const filteredPosts = selectedCategory === 'All' 
    ? forumPosts 
    : forumPosts.filter(post => post.category === selectedCategory)

  const handleCreatePost = () => {
    // Aqui você implementaria a lógica para criar o post
    console.log('Creating post:', newPost)
    setShowCreatePost(false)
    setNewPost({ title: '', category: 'Development', content: '' })
  }

  return (
    <>
      <div className="pt-8">

        <Section>
          <div className="flex justify-between items-center gap-4 mb-8">
            {/* Mobile: Select dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="sm:hidden flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>

            {/* Desktop: Buttons */}
            <div className="hidden sm:flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.name)}
                  className="gap-2"
                >
                  {category.name}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            <Button
              onClick={() => setShowCreatePost(true)}
              variant="gradient"
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              New Post
            </Button>
          </div>

          {/* Posts List */}
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id} 
                className="border-2 hover:shadow-lg transition-all cursor-pointer hover:border-primary/50"
                onClick={() => setSelectedPost(post)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {post.isHot && (
                          <Badge variant="destructive" className="gap-1">
                            <TrendingUp className="h-3 w-3" />
                            Hot
                          </Badge>
                        )}
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {post.excerpt}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.timeAgo}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.replies}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Create Post Modal */}
        {showCreatePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Create New Post</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowCreatePost(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Title</label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder="What's your question or topic?"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Development">Development</option>
                    <option value="Mining">Mining</option>
                    <option value="Support">Support</option>
                    <option value="Best Practices">Best Practices</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Security">Security</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Content</label>
                  <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="Describe your question or share your thoughts..."
                    rows={8}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>
                <div className="flex gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setShowCreatePost(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="gradient"
                    onClick={handleCreatePost}
                    className="gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Post
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* View Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {selectedPost.isHot && (
                      <Badge variant="destructive" className="gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Hot
                      </Badge>
                    )}
                    <Badge variant="outline">{selectedPost.category}</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedPost(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <CardTitle className="text-2xl">{selectedPost.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedPost.timeAgo}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{selectedPost.views} views</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p>{selectedPost.excerpt}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t">
                  <Button variant="outline" className="gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Like ({selectedPost.likes})
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Reply
                  </Button>
                </div>

                {/* Replies Section */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold">{selectedPost.replies} Replies</h3>
                  <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <Card key={i} className="border">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium">User {i + 1}</span>
                                <span className="text-sm text-muted-foreground">• {i + 1} hours ago</span>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                This is a sample reply to the post. In a real implementation, this would contain actual user responses and feedback.
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <Button variant="ghost" size="sm" className="gap-1 h-7">
                                  <ThumbsUp className="h-3 w-3" />
                                  <span className="text-xs">{5 - i}</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Reply Input */}
                  <Card className="border-2 border-dashed">
                    <CardContent className="pt-4">
                      <textarea
                        placeholder="Write your reply..."
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      />
                      <div className="flex justify-end mt-3">
                        <Button variant="gradient" className="gap-2">
                          <Send className="h-4 w-4" />
                          Post Reply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  )
}
